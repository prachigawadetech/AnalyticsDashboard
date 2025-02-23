from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"index.html")

def area_chart(request):
    return render(request,"area_chart.html")


def two_charts(request):
    return render(request,"two_charts.html")


def hori_chart(request):
    return render(request,"hori_chart.html")


def datatables(request):
    return render(request,"datatables.html")