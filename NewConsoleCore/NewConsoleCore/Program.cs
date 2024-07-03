using System;

   class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter a number");
        int num=int.Parse(Console.ReadLine());
       

        for(int i = 2; i <= num; i++)
        {
            if (Isprime(i)){
                Console.WriteLine($" {i} It's a prime number");


            }
            else
            {
                Console.WriteLine($" {i} Not a prime number");
            }


            }
        }

    static bool Isprime(int number)
    {
        if (number <= 1) return false;
        if(number == 2) return true;

        var boundary= (int)Math.Sqrt(number);
        for(int i = 2; i <= boundary; i++)
        {
            if(number%i==0) return false;

        }
        return true;
       
    }

        
    
}
