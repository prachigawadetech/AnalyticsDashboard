from django.urls import path
from . import views

urlpatterns=[
        path("",views.index, name="dashboard-index"),
        path("reports",views.reports, name="dashboard-reports"),
        path("get_data",views.get_txns_data, name="dashboard-get_txns_data"),
        path("customers",views.customers, name="dashboard-customers"),
        path("bussanalysis",views.bussanalysis, name="dashboard-buss-analysis"),
        path("custanalysis",views.custanalysis, name="dashboard-cust-analysis"),
        path("predictanalysis",views.predictanalysis, name="dashboard-predict-analysis")
]