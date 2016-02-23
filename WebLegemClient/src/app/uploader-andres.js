(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("uploaderController", uploaderController);

    uploaderController.$inject = ["$state"];

    function uploaderController($state) {
        var an = this;
        var dropBox;
        var reader;
        var progress;

        dropBox = document.getElementById("fileOutput");
        dropBox.ondragenter = ignoreDrag;
        dropBox.ondragleave = leaveDrag;
        dropBox.ondragover = ignoreDrag;
        dropBox.onchange = processFiles;
        dropBox.ondrop = drop;
        progress = document.querySelector(".percent");

        an.abortRead = function () {
            progress.style.width = '0%';
            progress.textContent = '0%';
            setTimeout(cambiarClase, 1300);
            var divfileSize = document.getElementById('fileSize');
            var divfileType = document.getElementById('fileType');
            divfileSize.innerHTML = '';
            divfileType.innerHTML = '';
            dropBox.classList.remove('loaded');
            dropBox.classList.remove('dragging');
            document.getElementById('ico_no_cargado').style.display= 'block';
            document.getElementById('ico_cargado').style.display = 'none';
            document.getElementById('cancelar_lectura').style.display = 'none';
            reader.abort();
        }

        function processFiles(files, ban) {

            if (ban == true) {
                var file = files[0];
            }
            else {
                var archivoSeleccionado = document.getElementById("files");
                var file = archivoSeleccionado.files[0];
            }

            progress.style.width = '0%';
            progress.textContent = '0%';

            if (file) {
                var fileSize = 0;
                if (file.size > 1048576) {
                    fileSize = (Math.round(file.size * 100 / 1048576) / 100).toString() + ' MB';
                }
                else {
                    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + ' Kb';
                }
                var divfileSize = document.getElementById('fileSize');
                var divfileType = document.getElementById('fileType');
                divfileSize.innerHTML = 'Tamaño: ' + fileSize;
                divfileType.innerHTML = 'Nombre: ' + file.name;
            }

            document.getElementById('cancelar_lectura').style.display = 'block';

            var reader = new FileReader();
            reader.onerror = errorHandler;
            reader.onprogress = updateProgress;
            reader.onabort = function (e) { alert('Carga Cancelada'); };
            reader.onloadstart = function (e) {
                document.getElementById('progress_bar').className = 'loading';
            };
            reader.onload = function (e) {
                // Cuando éste evento se dispara, los datos están ya disponibles.
                progress.style.width = '100%';
                progress.textContent = '100%';
                setTimeout(cambiarClase, 1300);
                dropBox.classList.add('loaded');
                document.getElementById('ico_no_cargado').style.display = 'none';
                document.getElementById('ico_cargado').style.display = 'block';
            };

            //reader.readAsDataURL(file);
            reader.readAsBinaryString(file);
        }

        // ---------------------------------------      

        function cambiarClase() {
            var a = document.getElementById("progress_bar");
            a.classList.remove('percent');
            a.classList.remove('loading');
        }

        function ignoreDrag(e) {
            dropBox.classList.add('dragging');
            e.stopPropagation();
            e.preventDefault();
        }

        function leaveDrag(e) {
            dropBox.classList.remove('dragging');
            e.stopPropagation();
            e.preventDefault();
        }

        function drop(e) {
            e.stopPropagation();
            e.preventDefault();

            var data = e.dataTransfer;
            var files = data.files;
            var ban_file = true;
            processFiles(files, ban_file);
        }
        // ----------------------------------------
        function updateProgress(evt) {
            // evt is an ProgressEvent.
            if (evt.lengthComputable) {
                var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                // Increase the progress bar length.
                if (percentLoaded < 100) {
                    progress.style.width = percentLoaded + '%';
                    progress.textContent = percentLoaded + '%';
                }
            }
        }
        //----------------------------------------
        function errorHandler(evt) {
            switch (evt.target.error.code) {
                case evt.target.error.NOT_FOUND_ERR:
                    alert('El Archivo no se puede leer!');
                    progress.style.width = '0%';
                    progress.textContent = '0%';
                    setTimeout(cambiarClase, 1300);
                    var divfileSize = document.getElementById('fileSize');
                    var divfileType = document.getElementById('fileType');
                    divfileSize.innerHTML = '';
                    divfileType.innerHTML = '';
                    break;
                case evt.target.error.NOT_READABLE_ERR:
                    alert('No se puede leer Archivo');
                    break;
                case evt.target.error.ABORT_ERR:
                    break; // noop
                default:
                    alert('Un error ocurrio leyendo este archivo.');
            };
        }
    }

})();
