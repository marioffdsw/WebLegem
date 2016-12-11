using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace WebLegemAPI.Models
{
    public class HttpErrorMessage<T>
    {

        public HttpStatusCode StatusCode { get; set; }
        public string ErrorMessage { get; set; }
        public T Value { get; set; }

    } // end class HttpErrorMessage
} // end namespace WebLegemAPI.Models