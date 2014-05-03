namespace DebugTest
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 5;
            int b = 2;
            int result = MakeComplicatedCalculation(a, b);
            Console.WriteLine(result);
        }

        static int MakeComplicatedCalculation(int a, int b)
        {
            return a * b;
        }
    }
}
