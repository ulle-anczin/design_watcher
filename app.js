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

# Additional Implementation 1760497699

# Code Update 1760497699-11202

# Code Update 1760497699-13362

# Code Update 1760497699-20290

# Code Update 1760497699-19882

# Code Update 1760497699-6454

# Code Update 1760497699-8152

# Additional Implementation 1760497699

# Additional Implementation 1760497699

# Code Update 1760497699-18810

# Code Update 1760497700-6764
