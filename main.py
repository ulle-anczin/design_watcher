using System;
using System.Collections.Generic;
using System.Text.Json;

namespace design_watcher
{
    public class main
    {
        public string Name { get; set; }
        public string Version { get; set; }
        public List<string> Items { get; set; }

        public main()
        {
            Name = "design_watcher";
            Version = "1.0.0";
            Items = new List<string> { "Item1", "Item2", "Item3" };
        }

        public void Run()
        {
            Console.WriteLine($"Welcome to {Name} v{Version}");
            Console.WriteLine("Items:");
            foreach (var item in Items)
            {
                Console.WriteLine($"- {item}");
            }
        }

        public string ToJson()
        {
            return JsonSerializer.Serialize(this, new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var app = new main();
            app.Run();
            Console.WriteLine("\nJSON Output:");
            Console.WriteLine(app.ToJson());
        }
    }
}

# Code Update 1760497699-27790

# Additional Implementation 1760497699

# Additional Implementation 1760497699

# Additional Implementation 1760497699

# Additional Implementation 1760497699

# Code Update 1760497700-2152

# Code Update 1760497700-12571

# Code Update 1760497700-24937

# Additional Implementation 1760497700

# Code Update 1760497700-12256
