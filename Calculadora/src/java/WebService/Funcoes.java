/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WebService;

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
    @WebMethod(operationName = "Soma")
    public Double Soma(@WebParam(name = "numero1") Double numero1, @WebParam(name = "numero2") Double numero2) {
        //TODO write your implementation code here:
        return numero1 + numero2;
    }

    /**
     * Operação de Web service
     */
    @WebMethod(operationName = "Subtracao")
    public Double Subtracao(@WebParam(name = "numero1") double numero1, @WebParam(name = "numero2") double numero2) {
        //TODO write your implementation code here:
        return numero1 - numero2;
    }
}
