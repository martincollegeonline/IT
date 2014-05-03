﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CDemoLib
{
    public class Customer
    {
        private int _age;
        private string _name;

        public Customer()
        {
            Age = 0;
            Name = "Not available";
        }

        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }
}
