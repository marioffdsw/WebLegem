namespace Weblegem.Dal

open System
open System.Data
open System.Configuration
open Oracle.DataAccess.Client
open Oracle.DataAccess.Types
open WebLegemDAL.Models
    
module DB =
    let private ConnectionString =
        ConfigurationManager 
            .ConnectionStrings.["WLConnection"]
            .ConnectionString

    let private GetConnection () = 
        let conn = new OracleConnection( ConnectionString )
        conn.Open()
        conn 

    type DynamicOracleParam = {
        Value: obj
        Direction : ParameterDirection
        Type: OracleDbType
        UdtName: string option
    }

    type DynamicOracleDataReader( reader: OracleDataReader ) =
        interface IDisposable with
            member x.Dispose() =
                x.Reader.Dispose()
            
            
        member private x.Reader = reader
        member x.Read() = reader.Read()
        static member (?) (dr: DynamicOracleDataReader, name: string) : 'R =
            unbox ( dr.Reader.[name] )

    type DynamicOracleCommand(cmd: OracleCommand) = 
        interface IDisposable with
            member x.Dispose() =
                x.Command.Dispose()        
        member private x.Command = cmd
        static member (?<-) (cmd: DynamicOracleCommand, name: string, param: DynamicOracleParam) =
            let p = new OracleParameter( name, param.Type)
            p.Value = param.Value |> ignore
            p.Direction = param.Direction |> ignore            
            
            match param.UdtName with
                | Some udtName -> p.UdtTypeName = udtName |> ignore
                | None -> ()

            cmd.Command.Parameters.Add(p) |> ignore

        member x.ExecuteReader() =
            new DynamicOracleDataReader(cmd.ExecuteReader())
        

    type DynamicOracleConnection () =        
        let conn = GetConnection()        
        interface IDisposable with
            member x.Dispose() =
                x.Connection.Dispose()

        
        member private x.Connection = conn
        static member (?) (dao: DynamicOracleConnection, name: string) =
            let command = new OracleCommand( name, dao.Connection )
            command.CommandType <- CommandType.StoredProcedure
            new DynamicOracleCommand(command)

    module public EntityType =
        let GetEntityTypes() = seq {
            use conn = new DynamicOracleConnection()
            use cmd = conn?GET_ENTITY_TYPES_TRIG
            use reader = cmd.ExecuteReader()
                
            while (reader.Read()) do
                yield reader?TipoEntidad }





        