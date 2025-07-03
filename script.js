document.addEventListener('DOMContentLoaded', () => { 
    const noteInput = document.getElementById('noteInput');
    const octaveInput = document.getElementById('octaveInput');
    const analyzeScalesBtn = document.getElementById('analyzeScalesBtn');
    const analyzeChordsBtn = document.getElementById('analyzeChordsBtn');
    const scaleResults = document.getElementById('scaleResults');
    const scaleList = document.getElementById('scaleList');
    const noScaleResults = document.getElementById('noScaleResults');
    const chordResults = document.getElementById('chordResults');
    const identifiedChord = document.getElementById('identifiedChord');
    const chordNotes = document.getElementById('chordNotes');
    const noChordResults = document.getElementById('noChordResults');

    // Inicialmente, esconde os resultados
    scaleResults.style.display = 'none';
    chordResults.style.display = 'none';

    // Função para simular a busca de escalas (no futuro, faria uma requisição ao backend)
    const simulateScaleAnalysis = (notes, octave) => {
        // Exemplo de lógica de simulação
        scaleList.innerHTML = ''; // Limpa resultados anteriores
        let foundScales = [];

        if (notes.includes('C') && notes.includes('E') && notes.includes('G')) {
            foundScales.push({ name: 'C Maior', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] }); 
        }
        if (notes.includes('A') && notes.includes('C') && notes.includes('E')) {
            foundScales.push({ name: 'A Menor Natural', notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] });
        }

        if (foundScales.length > 0) {
            foundScales.forEach(scale => {
                const li = document.createElement('li');
                li.textContent = `${scale.name} (${scale.notes.join(', ')})`;
                scaleList.appendChild(li);
            });
            scaleResults.style.display = 'block';
            noScaleResults.style.display = 'none';
        } else {
            scaleResults.style.display = 'block';
            noScaleResults.style.display = 'block';
        }
    };

    // Função para simular a identificação de acordes (no futuro, faria uma requisição ao backend)
    const simulateChordIdentification = (notes, octave) => {
        chordNotes.innerHTML = ''; // Limpa resultados anteriores
        let identified = false;

        // Simulação de identificação
        if (notes.length === 3) {
            if (notes.includes('C') && notes.includes('E') && notes.includes('G')) {
                identifiedChord.textContent = 'C Maior';
                ['C', 'E', 'G'].forEach(n => {
                    const li = document.createElement('li');
                    li.textContent = `${n}${octave}`;/
                    chordNotes.appendChild(li);//
                });
                identified = true;
            } else if (notes.includes('A') && notes.includes('C') && notes.includes('E')) {
                identifiedChord.textContent = 'Am (Lá Menor)';
                ['A', 'C', 'E'].forEach(n => {
                    const li = document.createElement('li');
                    li.textContent = `${n}${octave}`;
                    chordNotes.appendChild(li);
                });
                identified = true;
            }
        }

        if (identified) {
            chordResults.style.display = 'block';
            noChordResults.style.display = 'none';
        } else {
            chordResults.style.display = 'block';
            noChordResults.style.display = 'block';
            identifiedChord.textContent = 'Nenhum'; // Reset se não identificado
        }
    };

    analyzeScalesBtn.addEventListener('click', () => {
        const notes = noteInput.value.split(',').map(note => note.trim().toUpperCase());
        const octave = parseInt(octaveInput.value);
        simulateScaleAnalysis(notes, octave);
    });

    analyzeChordsBtn.addEventListener('click', () => {
        const notes = noteInput.value.split(',').map(note => note.trim().toUpperCase());
        const octave = parseInt(octaveInput.value);
        simulateChordIdentification(notes, octave);
    });
});