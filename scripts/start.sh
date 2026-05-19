#!/bin/bash

echo "🚀 Starting Complete TaskFlow DevOps Project..."

cd ..

if [ -d "terraform" ]; then
  cd terraform
  terraform init
  terraform apply -auto-approve
  cd ..
fi

docker build -t taskflow-backend ./backend
docker build -t taskflow-frontend ./frontend

if ! kind get clusters | grep -q "devops-cluster"; then
  kind create cluster --name devops-cluster
else
  echo "✅ Kind cluster already exists"
fi

kind load docker-image taskflow-backend --name devops-cluster
kind load docker-image taskflow-frontend --name devops-cluster

kubectl apply -f k8s-manifest/

kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

kubectl patch deployment metrics-server -n kube-system \
  --type='json' \
  -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update

if ! helm list | grep -q "prometheus"; then
  helm install prometheus prometheus-community/prometheus
else
  echo "✅ Prometheus already installed"
fi

sleep 40

kubectl get pods

kubectl port-forward svc/grafana 3000:80 > /dev/null 2>&1 &

kubectl port-forward svc/frontend-service 8080:80 > /dev/null 2>&1 &

echo ""
echo "========================================="
echo "✅ TASKFLOW PROJECT STARTED SUCCESSFULLY"
echo "========================================="
echo ""

echo "🌍 Frontend:"
echo "http://localhost:8080"

echo ""
echo "📊 Grafana Dashboard:"
echo "http://localhost:3000"

echo ""
echo "👤 Grafana Login:"
echo "Username: admin"
echo "Password: admin"

echo ""
echo "🚀 DevOps Stack Running Successfully"