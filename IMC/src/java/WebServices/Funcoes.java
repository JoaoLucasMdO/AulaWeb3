/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WebServices;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author Alunos
 */
@WebService(serviceName = "Funcoes")
public class Funcoes {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Operação de Web service
     */
    @WebMethod(operationName = "CalculoIMC")
    public String CalculoIMC(@WebParam(name = "peso") double peso, @WebParam(name = "altura") double altura) {
        double resultado = peso / (altura * altura);
        String mensagem = "";
        
        if(resultado < 18.4){
        mensagem = "Abaixo do peso";
        }
        else if(resultado > 18.5 && resultado < 24.9){
        mensagem = "Peso normal";
        }
        else if(resultado > 25.0 && resultado < 29.9){
        mensagem = "Sobrepeso";
        }
        else if(resultado > 30.0 && resultado < 34.9){
        mensagem = "Obesidade grau 1";
        }
        else if(resultado > 35.0 && resultado < 39.9){
        mensagem = "Obesidade grau 2";
        }
        else{
        mensagem = "Obesidade grau 3";
        }
        
        return mensagem;
    }
}
