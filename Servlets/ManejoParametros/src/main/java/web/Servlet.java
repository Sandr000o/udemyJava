package web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

/**
 *
 * @author Sandro
 */
@WebServlet("/Servlet")
public class Servlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //Leer los parámetros del formulario HTML
        String usuario = request.getParameter("usuario");
        String password = request.getParameter("password");

        System.out.println("Usuario : " + usuario);
        System.out.println("Password : " + password);
        
        response.setContentType("text/html;chartset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<body>");
        out.print("El párametro usuario es : " + usuario);
        out.println("</br>");
        out.print("El párametro password es : " + password);
        out.println("</body>");
        out.println("</html>");

    }
}
