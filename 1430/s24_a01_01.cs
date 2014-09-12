using System;
namespace Example1
{
    class Program
    {
        static void printarray(int[] arr)
        {
            Console.WriteLine("\n\nElements of array are:\n");
            foreach (int i in arr)
                {
                    Console.Write("\t{0}", i);
                }
        }
        static void Main(string[] args)
        {
            int[] arr = new int[5];
            int i; // loop for accepting values in array
            for (i = 0; i < 5; i++)
            {
                Console.Write("Enter number:\t");
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }
            Program.printarray(arr);
            //sorting array value;
            Array.Sort(arr); //use array's sort function
            Program.printarray(arr);
            Console.ReadLine();
        }
    }
}