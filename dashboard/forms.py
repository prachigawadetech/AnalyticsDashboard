from django import forms

class MyForm(forms.Form):
    date = forms.DateField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'id': 'datepicker', 'name': 'date'})
    )
