using System;
using System.Collections.Generic;
using System.Text;
namespace ConsoleApplication3
{
    class Method_overloading
    {
        public int Addition(int a, int b)
        {
            int x;
            return x=a+b;
        }
        public int Addition(int a, int b,int c)
        {
            int y;
            return y = a + b+ c;
        }
        public float Addition(float a, float b)
        {
            float u;
            return u = a + b;
        }
        public float Addition(float a, float b, float c)
        {
            float v;
            return v = a + b+ c;
        }
    }
//Now you can use those Addition method four types
 
    class hub
    {
        public static void Main(String[] args)
        {
            Method_overloading mthover = new Method_overloading();
            Console.WriteLine("Addition of two integers::::::::::::::::" + mthover.Addition(2, 5));
            Console.WriteLine("Addition of two double type values::::::" + mthover.Addition(0.40f, 0.50f));
            Console.WriteLine("Addition of three integers::::::::::::::" + mthover.Addition(2, 5, 5));
            Console.WriteLine("Addition of three double type values::::" + mthover.Addition(0.40f, 0.50f, 0.60f));
            Console.ReadLine();
        }
    }
}
