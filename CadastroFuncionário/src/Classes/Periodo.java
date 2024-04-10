package Classes;

import java.util.Calendar;


public class Periodo {
    Calendar inicio;
    Calendar fim;
    float peso;
    
    public Periodo(Calendar inicio, Calendar fim, float peso){
        this.inicio = inicio;
        this.fim = fim;
        this.peso = peso; 
    }

    public Calendar getInicio() {
        return this.inicio;
    }

    public void setInicio(Calendar inicio) {
        this.inicio = inicio;
    }

    public Calendar getFim() {
        return this.fim;
    }

    public void setFim(Calendar fim) {
        this.fim = fim;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }
    
}