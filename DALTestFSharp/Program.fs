open System
open System.Data
open Oracle.DataAccess.Client
open Oracle.DataAccess.Types
open Weblegem.Dal.DB.EntityType

[<EntryPoint>]
let main argv =  
    let entities = GetEntityTypes()
    Console.WriteLine( entities )
    0 // return an integer exit code
