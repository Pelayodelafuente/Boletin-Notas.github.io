window.onload = function() {


    async function cargarDatos(){

        const response = await fetch("/Boletin-Notas/js/alumnos.json");
        const alumnos = await response.json();
        procesarAlumnos(alumnos);
    }

    

    function procesarAlumnos(alumnos){

        const verBoletines = document.getElementById('verBoletines');
        verBoletines.addEventListener('click', mostrarBoletines);

        function mostrarBoletines(){

        const fichaAlumno = document.getElementById('fichaAlumno');
        fichaAlumno.innerHTML='';

        // const contenedor = document.createElement('div');
        // contenedor.className='contenedor';


        fichaAlumno.innerHTML='';
        

        for (const alumno of alumnos){
           
            const div = document.createElement('div');
            div.className = 'alumno';


            const foto = document.createElement('img');
            foto.src = `./imagenes/${alumno.foto}`;
            foto.className='foto';
            div.appendChild(foto);

            const nombreCompleto = document.createElement('h2');
            nombreCompleto.textContent = `${alumno.nombre} ${alumno.apellidos}`;
            div.appendChild(nombreCompleto);
            

            const asignaturas = document.createElement('div');
            asignaturas.className='notas';

            
            const mate= document.createElement('p');
            mate.innerHTML = `Matemáticas: <span>${alumno.matematicas}</span>`;
            asignaturas.appendChild(mate);

            const lengua = document.createElement('p');
            lengua.innerHTML = `Lengua: <span>${alumno.lengua}</span>`;
            asignaturas.appendChild(lengua);

            const ingles = document.createElement('p');
            ingles.innerHTML = `Ingles: <span>${alumno.ingles}</span>`;
            asignaturas.appendChild(ingles);


            div.appendChild(asignaturas);
            document.body.appendChild(fichaAlumno);
            fichaAlumno.appendChild(div);
            
            
        }



    }

       const seleccionaAsignatura = document.getElementById('asignaturas');
       const verNotas = document.getElementById('ver-notas');
       const fichaAlumno = document.getElementById('fichaAlumno');


       verNotas.addEventListener('click', mostrarNotas);
       function mostrarNotas(){


        const materiaSeleccionada = seleccionaAsignatura.value;
       
        fichaAlumno.innerHTML='';

        

        for (const alumno of alumnos){


            const div = document.createElement('div');
            div.className = 'alumno';

            const foto = document.createElement('img');
            foto.src = `./imagenes/${alumno.foto}`;
            foto.className='foto';
            div.appendChild(foto);

            const nombreCompleto = document.createElement('h2');
            nombreCompleto.textContent = `${alumno.nombre} ${alumno.apellidos}`;
            div.appendChild(nombreCompleto);

            const nota = document.createElement('p');
            nota.textContent=`${materiaSeleccionada}: ${alumno.matematicas}`;
            div.appendChild(nota);

            fichaAlumno.appendChild(div);

        
        }

    
       }




       const notaMedia = document.getElementById('nota-media');
       notaMedia.addEventListener('click', mostrarMedia);

       function mostrarMedia(){

        fichaAlumno.innerHTML='';

        for (const alumno of alumnos){

            const div = document.createElement('div');
            div.className = 'alumno';

            const foto = document.createElement('img');
            foto.src = `./imagenes/${alumno.foto}`;
            foto.className='foto';
            div.appendChild(foto);

            const nombreCompleto = document.createElement('h2');
            nombreCompleto.textContent = `${alumno.nombre} ${alumno.apellidos}`;
            div.appendChild(nombreCompleto);

            const notaMediaAlumno = document.createElement('p');
            const media = (alumno.lengua + alumno.matematicas + alumno.ingles) / 3;
            notaMediaAlumno.textContent = `Nota media: ${media.toFixed(2)}`;
            div.appendChild(notaMediaAlumno);

            fichaAlumno.appendChild(div);

        }

       }

    
        

       

    }

    

    cargarDatos();






}

 