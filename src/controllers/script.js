import { bst } from "./dependencies.js";
import Student from "../models/Student.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('insert').addEventListener('click', () => {
        const id = parseInt(document.getElementById('id').value);
        const name = document.getElementById('name').value;
        const career = document.getElementById('career').value;
        const grade = parseInt(document.getElementById('grade').value);

        if (id && name && career && grade) {
            const student = new Student(id, name, career, grade);
            const success = bst.add(student);
            if (success) {
                alert('Estudiante agregado correctamente!');
                document.getElementById('id').value = '';
                document.getElementById('name').value = '';
                document.getElementById('career').value = '';
                document.getElementById('grade').value = '';
            } else {
                alert('Falló el registro');
            }
        } else {
            alert('Por favor, llene todos los campos');
        }
    });

    document.getElementById('search').addEventListener('click', () => {
        const id = parseInt(document.getElementById('id').value);
        const student = bst.search({ id: id });
        if (student) {
            alert(`ID: ${student.id}, Nombre: ${student.name}, Carrera: ${student.career}, Calificación: ${student.grade}`);
        } else {
            alert('Estudiante no encontrado!');
        }
    });

    document.getElementById('print').addEventListener('click', () => {
        const tbody = document.querySelector('#studentsTable tbody');
        tbody.innerHTML = ''; 
        bst.inOrderTraversal(student => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.career}</td><td>${student.grade}</td>`;
            tbody.appendChild(row);
        });
    });

    document.getElementById('min').addEventListener('click', () => {
        const student = bst.min();
        if (student) {
            alert(`ID: ${student.id}, Nombre: ${student.name}, Carrera: ${student.career}, Calificación: ${student.grade}`);
        } else {
            alert('No hay estudiantes registrados');
        }
    });

    document.getElementById('max').addEventListener('click', () => {
        const student = bst.max();
        if (student) {
            alert(`ID: ${student.id}, Nombre: ${student.name}, Carrera: ${student.career}, Calificación: ${student.grade}`);
        } else {
            alert('No hay estudiantes registrados');
        }
    });
});
