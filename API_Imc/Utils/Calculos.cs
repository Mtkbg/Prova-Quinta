namespace API_Imc.Utils
{
  public class Calculos
  {
    private static double magreza;
    private static double normal;
    private static double sobrepeso;
    private static double obesidade;
    private static double obesidadeGrave;
    private const double result = CalcularImc;

    public static double CalcularImc(double peso, double altura)
        => (altura * altura) / peso;
    public static double ClassificacaoImc(double bruto)
    {
      if (result < 18.5) return magreza;

      if (result >= 18.5 && result <= 24.9) return normal;

      if (result > 25 && result <= 29.9) return sobrepeso;

      if (result > 30 && result <= 39.9) return obesidade;

      return obesidadeGrave;
    }
  }
}