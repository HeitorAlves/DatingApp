using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddAplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Adpplication-Error", message);
            response.Headers.Add("Acess-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Acess-Control-Allow-Origin", "*");
        }
    }
}
