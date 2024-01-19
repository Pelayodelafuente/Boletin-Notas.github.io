window.onload = function() {

    async function cargarDatos(){

        const response = await fetch("../../alumnos.json");
        const alumnos = await response.json();
        procesarAlumnos(alumnos);
    }

    function procesarAlumnos(alumnos){

       

        for (const alumno of alumnos){

        const encabezado=document.createElement('div');
        encabezado.className="encabezado";

        const logo = document.createElement('img');
        logo.className="logo";
        logo.src="./imagenes/logo.png";

        const h1 = document.createElement('h1');
        h1.innerHTML=`Centro de estudios <span>La Laboral</span>`;

        encabezado.appendChild(logo);
        encabezado.appendChild(h1);
        

        const alumnoGeneral = document.getElementById('alumno');
        const alumnoFicha = document.createElement('div');
        alumnoFicha.className='fichasAlumno';

        alumnoFicha.appendChild(encabezado);

        const identidad = document.createElement('div');
        identidad.className="alumnoInd";
        const foto = document.createElement('img');
        foto.src=`./imagenes/${alumno.foto}`;
        foto.className='foto';
        identidad.appendChild(foto);
        alumnoFicha.appendChild(identidad);
        
        
        

        const h2 = document.createElement('h2');
        h2.textContent= `${alumno.nombre} ${alumno.apellidos}`;
        identidad.appendChild(h2);


        alumnoFicha.appendChild(identidad);
    


        const divNotas = document.createElement('div');
        divNotas.className='divNotas';


        const divNombreMateria = document.createElement('div');
        divNombreMateria.className='nombreMateria';

        const mate = document.createElement('h2');
        mate.textContent="Matemáticas:";

        const lengua = document.createElement('h2');
        lengua.textContent="Lengua:";

        const ingles = document.createElement('h2');
        ingles.textContent="Ingles:";

        
        const divNotaMateria = document.createElement('div');

        const notaMate = document.createElement('h2');
        notaMate.innerHTML=`${alumno.matematicas}`;

        const notaLengua = document.createElement('h2');
        notaLengua.innerHTML=`${alumno.lengua}`;

        const notaIngles = document.createElement('h2');
        notaIngles.innerHTML=`${alumno.ingles}`;

        

        

       

       
        divNombreMateria.appendChild(mate);
        divNombreMateria.appendChild(lengua);
        divNombreMateria.appendChild(ingles);
        divNotas.appendChild(divNombreMateria);

        

        divNotaMateria.appendChild(notaMate);
        divNotaMateria.appendChild(notaLengua);
        divNotaMateria.appendChild(notaIngles);
        divNotas.appendChild(divNotaMateria);

       
        alumnoFicha.appendChild(divNotas);
        

        alumnoGeneral.appendChild(alumnoFicha);
        
        }


        let creaPDF = document.getElementById("imprimir");
        creaPDF.addEventListener("click", imprimeNotas);
    
        function imprimeNotas(){
    
            let boletines = document.querySelector("#alumno");
    
            html2pdf()
                .set({
                    // margin: 0,
                    filename: 'Boletin notas.pdf',
                    image: {
                        type: 'jpeg',
                        quality:0.98
                    },
                    html2canvas:{
                        scale:1,
                        letterRendering: true,
                    },
                    jsPDF:{
                        unit:"in",
                        format: "a3",
                        orientation: 'portrait'
                    }
                })
                .from(boletines)
                .save();
        }

        

        
    }
    


    cargarDatos();


   

   

   

  
  


    
}