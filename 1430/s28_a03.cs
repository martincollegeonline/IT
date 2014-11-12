// Class library written in C++/CLR.
   ThrowNonCLS.Class1 myClass = new ThrowNonCLS.Class1();
   try
   {
    // throws gcnew System::String(
    // "I do not derive from System.Exception!");
    myClass.TestThrow(); 
   }
   catch (Exception e)
   {
    RuntimeWrappedException rwe = e as RuntimeWrappedException;
    if (rwe != null)    
    {
      String s = rwe.WrappedException as String;
      if (s != null)
      {
        Console.WriteLine(s);
      }
    }
    else
    {
       // Handle other System.Exception types.
    }
   }           
