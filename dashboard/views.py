from django.shortcuts import render

import pandas as pd
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request,"dashboard.html")

def reports(request):
    return render(request,"reports.html")

#function to display Transaction count chart monthly
def get_txns_data(request):
    print("reached...get_txns_data.... ")
    file_path = "core/static/assets/data/Monthly_Data.xlsx"  # Update with actual path
    df = pd.read_excel(file_path)

    labels = df["Month"].tolist()      # Extract months as labels
    data = df["TxnAmount"].tolist()    # Extract transaction amounts as data

    return JsonResponse({"labels": labels, "data": data})

def customers(request):
    return render(request,"customers.html")

def bussanalysis(request):
    return render(request,"bussanalysis.html")

def custanalysis(request):
    return render(request,"custanalysis.html")


def predictanalysis(request):
    return render(request,"predictanalysis.html")