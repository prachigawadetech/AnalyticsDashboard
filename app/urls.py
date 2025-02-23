from django.urls import path
from . import views

urlpatterns =[
    path("area-chart",views.area_chart, name="app-area-chart"),
    path("two-charts",views.two_charts, name="app-two-charts"),
    path("hori-chart",views.hori_chart, name="app-hori-chart"),
    path("datatables",views.datatables, name="app-datatables"),
    path("",views.index, name="app-index")
]