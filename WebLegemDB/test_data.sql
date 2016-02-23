/*
INSERT INTO tipos_documento_tab VALUES( 1, 'Circular' );
INSERT INTO tipos_documento_tab VALUES( 2, 'Ley' );
INSERT INTO tipos_documento_tab VALUES( 3, 'Ordenanza' );
INSERT INTO tipos_documento_tab VALUES( 4, 'Acuerdo' );
INSERT INTO tipos_documento_tab VALUES( 5, 'Resolución' );


INSERT INTO tipos_entidad_tab VALUES( 1, 'Rectoria' );
INSERT INTO tipos_entidad_tab VALUES( 2, 'Facultad' );
INSERT INTO tipos_entidad_tab VALUES( 3, 'Departamento' );
INSERT INTO tipos_entidad_tab VALUES( 4, 'Secretaría de Educación' );
INSERT INTO tipos_entidad_tab VALUES( 5, 'Ministerio de Educación' );


INSERT INTO documentos_soportados_tab VALUES( 1, 5 );
INSERT INTO documentos_soportados_tab VALUES( 1, 1 );
INSERT INTO documentos_soportados_tab VALUES( 1, 4 );
INSERT INTO documentos_soportados_tab VALUES( 2, 1 );
INSERT INTO documentos_soportados_tab VALUES( 2, 4 );
INSERT INTO documentos_soportados_tab VALUES( 3, 4 );
INSERT INTO documentos_soportados_tab VALUES( 5, 2 );
INSERT INTO documentos_soportados_tab VALUES( 4, 3 );


INSERT INTO entidades_tab VALUES( 1, 1, 'Rectoria' );
INSERT INTO entidades_tab VALUES( 2, 2, 'Facultad de Ingeniería' );
INSERT INTO entidades_tab VALUES( 3, 3, 'Departamento de Sistemas' );
INSERT INTO entidades_tab VALUES( 4, 3, 'Departamento de Ingeniería Civil' );
INSERT INTO entidades_tab VALUES( 5, 3, 'Departamento de Ingeniería Electronica' );
INSERT INTO entidades_tab VALUES( 6, 4, 'Secretaría de Educación' );
INSERT INTO entidades_tab VALUES( 7, 5, 'Ministerio de Educación' );


INSERT INTO identificadores_documentos_tab VALUES( 1, 1, 5, '2122', '2015' );
INSERT INTO identificadores_documentos_tab VALUES( 2, 2, 1, '034', '2014' );


INSERT INTO archivos_tab VALUES( 1, 'C:\oradata\web_legem\prueba3.pdf' );
INSERT INTO archivos_tab VALUES( 2, 'c:\oradata\web_legem\prueba4.pdf' );


INSERT INTO contenidos_archivos_tab VALUES( 1, 1, 1, 'Por medio de la cual se delega la ordenación del gasto para convocatorias de menor cuant/a y contrataciOn directa, en el marco de aplicaciOn del nuevo Estatuto de Contratación de la Universidad de Nariño y se derogan otras disposiciones.', BFILENAME( 'CONTENIDOS_DIR', 'prueba3.txt' ), 'A' );
INSERT INTO contenidos_archivos_tab VALUES( 2, 2, 2, 'RESTRICCIÓN EN EL MANEJO DE LA INFORMACIÓN DE LAS HOJAS', BFILENAME( 'CONTENIDOS_DIR', 'prueba4.txt' ), 'A' );
*/
--DELETE FROM contenidos_archivos_tab ca WHERE ca.id = 2;

/*
INSERT INTO identificadores_documentos_tab VALUES( 3, 3, 1, '027', '2013' );
INSERT INTO contenidos_archivos_tab VALUES( 3, 3, 3, 'CUENTA DE COBRO O FACTURA', BFILENAME( 'CONTENIDOS_DIR', 'prueba5.txt' ), 'A' );
*/

--INSERT INTO identificadores_documentos_tab VALUES( 4, 4, 1, '027', '2012' );

/*
INSERT INTO tipos_documento_view VALUES( tipo_documento_typ( 0, 'Prueba Tipo Documento' ) );
UPDATE tipos_documento_view tdv SET tipos_documento = tipo_documento_typ( 6, 'Prueba Actualizada' ) WHERE tdv.tipos_documento.id = 6;
DELETE FROM tipos_documento_view tdv WHERE tdv.tipos_documento.id = 6;
*/

/*
@@'Sequences/tipo_entidad_seq.sql'
@@'Sequences/entidad_seq.sql'
@@'Triggers/View Triggers/crear_entidad_trig.sql'
@@'Triggers/View Triggers/actualizar_entidad_trig.sql'
@@'Triggers/View Triggers/eliminar_entidad_trig.sql'
*/
