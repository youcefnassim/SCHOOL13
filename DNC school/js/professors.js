document.addEventListener('DOMContentLoaded', function() {
    // Comprehensive Educational Modules Data
    const educationalModules = {
        primary: {
            '1': [
                { 
                    id: 'arabic-1', 
                    name: 'Arabic Language', 
                    professor: 'Ahmed Mahmoud', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Learn Arabic language basics, reading, and writing - First Year Primary',
                    files: [
                        { name: 'Textbook PDF', type: 'pdf', url: '#' },
                        { name: 'Workbook', type: 'doc', url: '#' },
                        { name: 'Audio Lessons', type: 'audio', url: '#' }
                    ]
                },
                { 
                    id: 'math-1', 
                    name: 'Mathematics', 
                    professor: 'Youssef Ali', 
                    img: 'img/modules/math.jpg',
                    description: 'Basic arithmetic and number sense - First Year Primary',
                    files: [
                        { name: 'Textbook', type: 'pdf', url: '#' },
                        { name: 'Practice Sheets', type: 'doc', url: '#' }
                    ]
                },
                { 
                    id: 'islamic-1', 
                    name: 'Islamic Education', 
                    professor: 'Omar Khalid', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Basic Islamic teachings and values - First Year Primary',
                    files: [
                        { name: 'Textbook', type: 'pdf', url: '#' },
                        { name: 'Quran Recitation', type: 'audio', url: '#' }
                    ]
                },
                { 
                    id: 'civic-1', 
                    name: 'Civic Education', 
                    professor: 'Amina Said', 
                    img: 'img/modules/civic.jpg',
                    description: 'Basic civic values and social behavior - First Year Primary',
                    files: [
                        { name: 'Textbook', type: 'pdf', url: '#' }
                    ]
                },
                { 
                    id: 'physical-1', 
                    name: 'Physical Education', 
                    professor: 'Karim Benali', 
                    img: 'img/modules/pe.jpg',
                    description: 'Basic physical activities and sports - First Year Primary',
                    files: []
                }
            ],
            '2': [
                { 
                    id: 'arabic-2', 
                    name: 'Arabic Language', 
                    professor: 'Leila Ahmed', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Advanced Arabic reading and writing - Second Year Primary',
                    files: []
                },
                { 
                    id: 'math-2', 
                    name: 'Mathematics', 
                    professor: 'Karim Belkacem', 
                    img: 'img/modules/math.jpg',
                    description: 'Basic operations and problem solving - Second Year Primary',
                    files: []
                },
                { 
                    id: 'islamic-2', 
                    name: 'Islamic Education', 
                    professor: 'Fatima Zahra', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic teachings and Quran - Second Year Primary',
                    files: []
                },
                { 
                    id: 'civic-2', 
                    name: 'Civic Education', 
                    professor: 'Nadia Bouzid', 
                    img: 'img/modules/civic.jpg',
                    description: 'Social values and citizenship - Second Year Primary',
                    files: []
                },
                { 
                    id: 'physical-2', 
                    name: 'Physical Education', 
                    professor: 'Samir Hamdi', 
                    img: 'img/modules/pe.jpg',
                    description: 'Physical activities and coordination - Second Year Primary',
                    files: []
                }
            ],
            '3': [
                { 
                    id: 'arabic-3', 
                    name: 'Arabic Language', 
                    professor: 'Maryam Boudiaf', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Arabic grammar and composition - Third Year Primary',
                    files: []
                },
                { 
                    id: 'math-3', 
                    name: 'Mathematics', 
                    professor: 'Rachid Khelifi', 
                    img: 'img/modules/math.jpg',
                    description: 'Multiplication, division and geometry - Third Year Primary',
                    files: []
                },
                { 
                    id: 'french-3', 
                    name: 'French Language', 
                    professor: 'Sophie Martin', 
                    img: 'img/modules/french.jpg',
                    description: 'Introduction to French language - Third Year Primary',
                    files: []
                },
                { 
                    id: 'science-3', 
                    name: 'Science and Technology', 
                    professor: 'Amina Cherif', 
                    img: 'img/modules/science.jpg',
                    description: 'Basic scientific concepts and experiments - Third Year Primary',
                    files: []
                },
                { 
                    id: 'islamic-3', 
                    name: 'Islamic Education', 
                    professor: 'Ali Benali', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic values and teachings - Third Year Primary',
                    files: []
                },
                { 
                    id: 'history-3', 
                    name: 'History', 
                    professor: 'Yasmin Touati', 
                    img: 'img/modules/history.jpg',
                    description: 'Basic history and heritage - Third Year Primary',
                    files: []
                },
                { 
                    id: 'geography-3', 
                    name: 'Geography', 
                    professor: 'Mourad Zidane', 
                    img: 'img/modules/geography.jpg',
                    description: 'Basic geography and environment - Third Year Primary',
                    files: []
                },
                { 
                    id: 'civic-3', 
                    name: 'Civic Education', 
                    professor: 'Samia Kaci', 
                    img: 'img/modules/civic.jpg',
                    description: 'Civic values and social responsibility - Third Year Primary',
                    files: []
                },
                { 
                    id: 'physical-3', 
                    name: 'Physical Education', 
                    professor: 'Zinedine Hamdi', 
                    img: 'img/modules/pe.jpg',
                    description: 'Sports and physical development - Third Year Primary',
                    files: []
                }
            ],
            '4': [
                { 
                    id: 'arabic-4', 
                    name: 'Arabic Language', 
                    professor: 'Nawal Bensaad', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Advanced Arabic grammar and literature - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'math-4', 
                    name: 'Mathematics', 
                    professor: 'Farid Boudjemaa', 
                    img: 'img/modules/math.jpg',
                    description: 'Advanced arithmetic and problem solving - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'french-4', 
                    name: 'French Language', 
                    professor: 'Claire Dubois', 
                    img: 'img/modules/french.jpg',
                    description: 'French vocabulary and grammar - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'science-4', 
                    name: 'Science and Technology', 
                    professor: 'Nabil Rachedi', 
                    img: 'img/modules/science.jpg',
                    description: 'Scientific exploration and technology - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'islamic-4', 
                    name: 'Islamic Education', 
                    professor: 'Khadija Merad', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic principles and ethics - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'history-4', 
                    name: 'History', 
                    professor: 'Khaled Belkacem', 
                    img: 'img/modules/history.jpg',
                    description: 'Algerian and world history - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'geography-4', 
                    name: 'Geography', 
                    professor: 'Leila Boudiaf', 
                    img: 'img/modules/geography.jpg',
                    description: 'Geography of Algeria and the world - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'civic-4', 
                    name: 'Civic Education', 
                    professor: 'Omar Khemissi', 
                    img: 'img/modules/civic.jpg',
                    description: 'Citizenship and social values - Fourth Year Primary',
                    files: []
                },
                { 
                    id: 'physical-4', 
                    name: 'Physical Education', 
                    professor: 'Riad Belhaddad', 
                    img: 'img/modules/pe.jpg',
                    description: 'Advanced sports and fitness - Fourth Year Primary',
                    files: []
                }
            ],
            '5': [
                { 
                    id: 'arabic-5', 
                    name: 'Arabic Language', 
                    professor: 'Aicha Boutella', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Comprehensive Arabic language and literature - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'math-5', 
                    name: 'Mathematics', 
                    professor: 'Yacine Hamdani', 
                    img: 'img/modules/math.jpg',
                    description: 'Advanced mathematics and geometry - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'french-5', 
                    name: 'French Language', 
                    professor: 'Marie Bensalem', 
                    img: 'img/modules/french.jpg',
                    description: 'Advanced French language skills - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'science-5', 
                    name: 'Science and Technology', 
                    professor: 'Nassim Khelif', 
                    img: 'img/modules/science.jpg',
                    description: 'Advanced scientific concepts and technology - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'islamic-5', 
                    name: 'Islamic Education', 
                    professor: 'Abderrahim Zidane', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic studies and moral values - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'history-5', 
                    name: 'History', 
                    professor: 'Nawel Boudiaf', 
                    img: 'img/modules/history.jpg',
                    description: 'Comprehensive history studies - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'geography-5', 
                    name: 'Geography', 
                    professor: 'Amine Cherif', 
                    img: 'img/modules/geography.jpg',
                    description: 'Advanced geography and environmental studies - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'civic-5', 
                    name: 'Civic Education', 
                    professor: 'Soraya Kaci', 
                    img: 'img/modules/civic.jpg',
                    description: 'Advanced civic education and citizenship - Fifth Year Primary',
                    files: []
                },
                { 
                    id: 'physical-5', 
                    name: 'Physical Education', 
                    professor: 'Mehdi Touati', 
                    img: 'img/modules/pe.jpg',
                    description: 'Comprehensive physical education and sports - Fifth Year Primary',
                    files: []
                }
            ]
        },
        middle: {
            '1': [
                { 
                    id: 'arabic-m1', 
                    name: 'Arabic Language', 
                    professor: 'Fatima Benali', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Arabic language and literature - First Year Middle School',
                    files: []
                },
                { 
                    id: 'math-m1', 
                    name: 'Mathematics', 
                    professor: 'Yasmin Boudiaf', 
                    img: 'img/modules/math.jpg',
                    description: 'Algebra and geometry basics - First Year Middle School',
                    files: []
                },
                { 
                    id: 'french-m1', 
                    name: 'French Language', 
                    professor: 'Claire Dubois', 
                    img: 'img/modules/french.jpg',
                    description: 'French language and grammar - First Year Middle School',
                    files: []
                },
                { 
                    id: 'english-m1', 
                    name: 'English Language', 
                    professor: 'Sarah Johnson', 
                    img: 'img/modules/english.jpg',
                    description: 'English language basics - First Year Middle School',
                    files: []
                },
                { 
                    id: 'islamic-m1', 
                    name: 'Islamic Education', 
                    professor: 'Omar Khelifi', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic studies and values - First Year Middle School',
                    files: []
                },
                { 
                    id: 'history-geo-m1', 
                    name: 'History and Geography', 
                    professor: 'Karim Boudjemaa', 
                    img: 'img/modules/history.jpg',
                    description: 'History and geography studies - First Year Middle School',
                    files: []
                },
                { 
                    id: 'civic-m1', 
                    name: 'Civic Education', 
                    professor: 'Amina Touati', 
                    img: 'img/modules/civic.jpg',
                    description: 'Civic education and citizenship - First Year Middle School',
                    files: []
                },
                { 
                    id: 'sciences-m1', 
                    name: 'Natural Sciences', 
                    professor: 'Mourad Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'Natural sciences and biology - First Year Middle School',
                    files: []
                },
                { 
                    id: 'physics-m1', 
                    name: 'Physical Sciences', 
                    professor: 'Ali Rachedi', 
                    img: 'img/modules/physics.jpg',
                    description: 'Physics and chemistry basics - First Year Middle School',
                    files: []
                },
                { 
                    id: 'informatics-m1', 
                    name: 'Computer Science', 
                    professor: 'Mehdi Zidane', 
                    img: 'img/modules/computer.jpg',
                    description: 'Basic computer skills - First Year Middle School',
                    files: []
                },
                { 
                    id: 'arts-m1', 
                    name: 'Art Education', 
                    professor: 'Leila Bensaad', 
                    img: 'img/modules/art.jpg',
                    description: 'Visual arts and creativity - First Year Middle School',
                    files: []
                },
                { 
                    id: 'music-m1', 
                    name: 'Music Education', 
                    professor: 'Yacine Hamdi', 
                    img: 'img/modules/music.jpg',
                    description: 'Music theory and practice - First Year Middle School',
                    files: []
                },
                { 
                    id: 'physical-m1', 
                    name: 'Physical Education', 
                    professor: 'Riad Belhadj', 
                    img: 'img/modules/pe.jpg',
                    description: 'Physical education and sports - First Year Middle School',
                    files: []
                }
            ],
            '2': [
                { 
                    id: 'arabic-m2', 
                    name: 'Arabic Language', 
                    professor: 'Nawal Kaci', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Advanced Arabic language - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'math-m2', 
                    name: 'Mathematics', 
                    professor: 'Farid Boukadoum', 
                    img: 'img/modules/math.jpg',
                    description: 'Advanced algebra and geometry - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'french-m2', 
                    name: 'French Language', 
                    professor: 'Marie Dubois', 
                    img: 'img/modules/french.jpg',
                    description: 'Intermediate French - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'english-m2', 
                    name: 'English Language', 
                    professor: 'Jennifer Smith', 
                    img: 'img/modules/english.jpg',
                    description: 'Intermediate English - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'islamic-m2', 
                    name: 'Islamic Education', 
                    professor: 'Abderrahim Benali', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic studies and ethics - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'history-geo-m2', 
                    name: 'History and Geography', 
                    professor: 'Khaled Merad', 
                    img: 'img/modules/history.jpg',
                    description: 'World history and geography - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'civic-m2', 
                    name: 'Civic Education', 
                    professor: 'Soraya Boudiaf', 
                    img: 'img/modules/civic.jpg',
                    description: 'Advanced civic education - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'sciences-m2', 
                    name: 'Natural Sciences', 
                    professor: 'Nadia Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'Biology and natural sciences - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'physics-m2', 
                    name: 'Physical Sciences', 
                    professor: 'Nabil Rachedi', 
                    img: 'img/modules/physics.jpg',
                    description: 'Physics and chemistry - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'informatics-m2', 
                    name: 'Computer Science', 
                    professor: 'Amine Zidane', 
                    img: 'img/modules/computer.jpg',
                    description: 'Computer programming basics - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'arts-m2', 
                    name: 'Art Education', 
                    professor: 'Aicha Bensaad', 
                    img: 'img/modules/art.jpg',
                    description: 'Advanced visual arts - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'music-m2', 
                    name: 'Music Education', 
                    professor: 'Nassim Hamdi', 
                    img: 'img/modules/music.jpg',
                    description: 'Music composition and theory - Second Year Middle School',
                    files: []
                },
                { 
                    id: 'physical-m2', 
                    name: 'Physical Education', 
                    professor: 'Mehdi Belhadj', 
                    img: 'img/modules/pe.jpg',
                    description: 'Advanced physical education - Second Year Middle School',
                    files: []
                }
            ],
            '3': [
                { 
                    id: 'arabic-m3', 
                    name: 'Arabic Language', 
                    professor: 'Khadija Boutella', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Arabic literature and composition - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'math-m3', 
                    name: 'Mathematics', 
                    professor: 'Yacine Hamdani', 
                    img: 'img/modules/math.jpg',
                    description: 'Advanced mathematics - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'french-m3', 
                    name: 'French Language', 
                    professor: 'Sophie Bensalem', 
                    img: 'img/modules/french.jpg',
                    description: 'Advanced French language - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'english-m3', 
                    name: 'English Language', 
                    professor: 'Emma Wilson', 
                    img: 'img/modules/english.jpg',
                    description: 'Advanced English - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'islamic-m3', 
                    name: 'Islamic Education', 
                    professor: 'Mohamed Khelifi', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic civilization and values - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'history-geo-m3', 
                    name: 'History and Geography', 
                    professor: 'Leila Merad', 
                    img: 'img/modules/history.jpg',
                    description: 'Modern history and geography - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'civic-m3', 
                    name: 'Civic Education', 
                    professor: 'Omar Boudiaf', 
                    img: 'img/modules/civic.jpg',
                    description: 'Democratic values and citizenship - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'sciences-m3', 
                    name: 'Natural Sciences', 
                    professor: 'Amina Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'Advanced biology and ecology - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'physics-m3', 
                    name: 'Physical Sciences', 
                    professor: 'Karim Rachedi', 
                    img: 'img/modules/physics.jpg',
                    description: 'Advanced physics and chemistry - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'informatics-m3', 
                    name: 'Computer Science', 
                    professor: 'Riad Zidane', 
                    img: 'img/modules/computer.jpg',
                    description: 'Programming and algorithms - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'arts-m3', 
                    name: 'Art Education', 
                    professor: 'Maryam Bensaad', 
                    img: 'img/modules/art.jpg',
                    description: 'Creative arts and design - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'music-m3', 
                    name: 'Music Education', 
                    professor: 'Zinedine Hamdi', 
                    img: 'img/modules/music.jpg',
                    description: 'Advanced music theory - Third Year Middle School',
                    files: []
                },
                { 
                    id: 'physical-m3', 
                    name: 'Physical Education', 
                    professor: 'Farid Belhadj', 
                    img: 'img/modules/pe.jpg',
                    description: 'Competitive sports and fitness - Third Year Middle School',
                    files: []
                }
            ],
            '4': [
                { 
                    id: 'arabic-m4', 
                    name: 'Arabic Language', 
                    professor: 'Aicha Kaci', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Advanced Arabic literature - Fourth Year Middle School (BEM Prep)',
                    files: []
                },
                { 
                    id: 'math-m4', 
                    name: 'Mathematics', 
                    professor: 'Rachid Hamdani', 
                    img: 'img/modules/math.jpg',
                    description: 'BEM Mathematics preparation - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'french-m4', 
                    name: 'French Language', 
                    professor: 'Claire Bensalem', 
                    img: 'img/modules/french.jpg',
                    description: 'BEM French preparation - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'english-m4', 
                    name: 'English Language', 
                    professor: 'Sarah Wilson', 
                    img: 'img/modules/english.jpg',
                    description: 'BEM English preparation - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'islamic-m4', 
                    name: 'Islamic Education', 
                    professor: 'Ali Khelifi', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic studies for BEM - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'history-geo-m4', 
                    name: 'History and Geography', 
                    professor: 'Nawel Merad', 
                    img: 'img/modules/history.jpg',
                    description: 'BEM History and Geography - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'civic-m4', 
                    name: 'Civic Education', 
                    professor: 'Samia Boudiaf', 
                    img: 'img/modules/civic.jpg',
                    description: 'BEM Civic Education - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'sciences-m4', 
                    name: 'Natural Sciences', 
                    professor: 'Nabil Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'BEM Natural Sciences - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'physics-m4', 
                    name: 'Physical Sciences', 
                    professor: 'Yasmin Rachedi', 
                    img: 'img/modules/physics.jpg',
                    description: 'BEM Physics and Chemistry - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'informatics-m4', 
                    name: 'Computer Science', 
                    professor: 'Mehdi Zidane', 
                    img: 'img/modules/computer.jpg',
                    description: 'Advanced programming - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'arts-m4', 
                    name: 'Art Education', 
                    professor: 'Leila Bensaad', 
                    img: 'img/modules/art.jpg',
                    description: 'Portfolio preparation - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'music-m4', 
                    name: 'Music Education', 
                    professor: 'Amine Hamdi', 
                    img: 'img/modules/music.jpg',
                    description: 'Music performance - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'physical-m4', 
                    name: 'Physical Education', 
                    professor: 'Karim Belhadj', 
                    img: 'img/modules/pe.jpg',
                    description: 'Athletic preparation - Fourth Year Middle School',
                    files: []
                },
                { 
                    id: 'tamazight-m4', 
                    name: 'Tamazight Language', 
                    professor: 'Dihya Amellal', 
                    img: 'img/modules/tamazight.jpg',
                    description: 'Berber language and culture - Fourth Year Middle School',
                    files: []
                }
            ]
        },
        high: {
            '1': [
                { 
                    id: 'arabic-h1', 
                    name: 'Arabic Language', 
                    professor: 'Sofia Boutella', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Advanced Arabic language and literature - First Year Secondary',
                    files: []
                },
                { 
                    id: 'math-h1', 
                    name: 'Mathematics', 
                    professor: 'Karima Bensaad', 
                    img: 'img/modules/math.jpg',
                    description: 'Advanced mathematics and analysis - First Year Secondary',
                    files: []
                },
                { 
                    id: 'french-h1', 
                    name: 'French Language', 
                    professor: 'Claire Moreau', 
                    img: 'img/modules/french.jpg',
                    description: 'Advanced French language and literature - First Year Secondary',
                    files: []
                },
                { 
                    id: 'english-h1', 
                    name: 'English Language', 
                    professor: 'Jennifer Smith', 
                    img: 'img/modules/english.jpg',
                    description: 'Advanced English language and literature - First Year Secondary',
                    files: []
                },
                { 
                    id: 'islamic-h1', 
                    name: 'Islamic Sciences', 
                    professor: 'Omar Benali', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Islamic studies and jurisprudence - First Year Secondary',
                    files: []
                },
                { 
                    id: 'history-geo-h1', 
                    name: 'History and Geography', 
                    professor: 'Ali Khemissi', 
                    img: 'img/modules/history.jpg',
                    description: 'World history and geography - First Year Secondary',
                    files: []
                },
                { 
                    id: 'philosophy-h1', 
                    name: 'Philosophy', 
                    professor: 'Yacine Belhaddad', 
                    img: 'img/modules/philosophy.jpg',
                    description: 'Introduction to philosophical thinking - First Year Secondary',
                    files: []
                },
                { 
                    id: 'physics-h1', 
                    name: 'Physical Sciences', 
                    professor: 'Nadir Hamdani', 
                    img: 'img/modules/physics.jpg',
                    description: 'Advanced physics and chemistry - First Year Secondary',
                    files: []
                },
                { 
                    id: 'sciences-h1', 
                    name: 'Natural Sciences', 
                    professor: 'Amina Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'Advanced biology and life sciences - First Year Secondary',
                    files: []
                },
                { 
                    id: 'physical-h1', 
                    name: 'Physical Education', 
                    professor: 'Zinedine Zidane', 
                    img: 'img/modules/pe.jpg',
                    description: 'Advanced physical education and sports - First Year Secondary',
                    files: []
                }
            ],
            '2': [
                { 
                    id: 'arabic-h2', 
                    name: 'Arabic Language', 
                    professor: 'Nawal Boutella', 
                    img: 'img/modules/arabic.jpg',
                    description: 'Advanced Arabic literature and composition - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'math-h2', 
                    name: 'Mathematics', 
                    professor: 'Rachid Belkacem', 
                    img: 'img/modules/math.jpg',
                    description: 'Calculus and advanced analysis - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'french-h2', 
                    name: 'French Language', 
                    professor: 'Marie Dubois', 
                    img: 'img/modules/french.jpg',
                    description: 'Advanced French literature - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'english-h2', 
                    name: 'English Language', 
                    professor: 'Emma Wilson', 
                    img: 'img/modules/english.jpg',
                    description: 'Advanced English composition - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'islamic-h2', 
                    name: 'Islamic Sciences', 
                    professor: 'Ali Khelifi', 
                    img: 'img/modules/islamic.jpg',
                    description: 'Advanced Islamic studies - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'history-geo-h2', 
                    name: 'History and Geography', 
                    professor: 'Leila Merad', 
                    img: 'img/modules/history.jpg',
                    description: 'Modern history and world geography - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'philosophy-h2', 
                    name: 'Philosophy', 
                    professor: 'Rachid Belhaddad', 
                    img: 'img/modules/philosophy.jpg',
                    description: 'Ethics and logic - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'physics-h2', 
                    name: 'Physical Sciences', 
                    professor: 'Nassima Boudiaf', 
                    img: 'img/modules/physics.jpg',
                    description: 'Advanced physics and chemistry - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'sciences-h2', 
                    name: 'Natural Sciences', 
                    professor: 'Samia Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'Molecular biology and genetics - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'economics-h2', 
                    name: 'Economics', 
                    professor: 'Khaled Merad', 
                    img: 'img/modules/economics.jpg',
                    description: 'Economic principles and management - Second Year Secondary',
                    files: []
                },
                { 
                    id: 'physical-h2', 
                    name: 'Physical Education', 
                    professor: 'Mehdi Belhadj', 
                    img: 'img/modules/pe.jpg',
                    description: 'Competitive sports and fitness - Second Year Secondary',
                    files: []
                }
            ],
            '3': [
                { 
                    id: 'arabic-h3', 
                    name: 'Arabic Language', 
                    professor: 'Aicha Kaci', 
                    img: 'img/modules/arabic.jpg',
                    description: 'BAC Arabic literature preparation - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'math-h3', 
                    name: 'Mathematics', 
                    professor: 'Amine Boudiaf', 
                    img: 'img/modules/math.jpg',
                    description: 'BAC Mathematics preparation - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'french-h3', 
                    name: 'French Language', 
                    professor: 'Sophie Bensalem', 
                    img: 'img/modules/french.jpg',
                    description: 'BAC French preparation - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'english-h3', 
                    name: 'English Language', 
                    professor: 'Emma Wilson', 
                    img: 'img/modules/english.jpg',
                    description: 'BAC English preparation - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'islamic-h3', 
                    name: 'Islamic Sciences', 
                    professor: 'Mohamed Khelifi', 
                    img: 'img/modules/islamic.jpg',
                    description: 'BAC Islamic studies preparation - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'history-geo-h3', 
                    name: 'History and Geography', 
                    professor: 'Khaled Merad', 
                    img: 'img/modules/history.jpg',
                    description: 'BAC History and Geography - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'philosophy-h3', 
                    name: 'Philosophy', 
                    professor: 'Yacine Belhaddad', 
                    img: 'img/modules/philosophy.jpg',
                    description: 'BAC Philosophy preparation - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'physics-h3', 
                    name: 'Physical Sciences', 
                    professor: 'Nawel Khelif', 
                    img: 'img/modules/physics.jpg',
                    description: 'BAC Physics and Chemistry - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'sciences-h3', 
                    name: 'Natural Sciences', 
                    professor: 'Nabil Cherif', 
                    img: 'img/modules/biology.jpg',
                    description: 'BAC Natural Sciences - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'economics-h3', 
                    name: 'Economics and Management', 
                    professor: 'Soraya Boudiaf', 
                    img: 'img/modules/economics.jpg',
                    description: 'Economics and business management - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'accounting-h3', 
                    name: 'Accounting and Finance', 
                    professor: 'Omar Khemissi', 
                    img: 'img/modules/accounting.jpg',
                    description: 'Financial accounting and management - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'law-h3', 
                    name: 'Law', 
                    professor: 'Leila Boudiaf', 
                    img: 'img/modules/law.jpg',
                    description: 'Legal studies and jurisprudence - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'mechanical-h3', 
                    name: 'Mechanical Engineering', 
                    professor: 'Riad Belhaddad', 
                    img: 'img/modules/engineering.jpg',
                    description: 'Mechanical engineering principles - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'electrical-h3', 
                    name: 'Electrical Engineering', 
                    professor: 'Amine Zidane', 
                    img: 'img/modules/electrical.jpg',
                    description: 'Electrical engineering and electronics - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'civil-h3', 
                    name: 'Civil Engineering', 
                    professor: 'Mehdi Touati', 
                    img: 'img/modules/civil.jpg',
                    description: 'Civil engineering and construction - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'process-h3', 
                    name: 'Process Engineering', 
                    professor: 'Nawal Bensaad', 
                    img: 'img/modules/process.jpg',
                    description: 'Chemical and process engineering - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'german-h3', 
                    name: 'German Language', 
                    professor: 'Hans Mueller', 
                    img: 'img/modules/german.jpg',
                    description: 'German language and culture - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'spanish-h3', 
                    name: 'Spanish Language', 
                    professor: 'Maria Rodriguez', 
                    img: 'img/modules/spanish.jpg',
                    description: 'Spanish language and literature - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'italian-h3', 
                    name: 'Italian Language', 
                    professor: 'Giuseppe Rossi', 
                    img: 'img/modules/italian.jpg',
                    description: 'Italian language and culture - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'tamazight-h3', 
                    name: 'Tamazight Language', 
                    professor: 'Dihya Amellal', 
                    img: 'img/modules/tamazight.jpg',
                    description: 'Advanced Berber language and culture - Third Year Secondary',
                    files: []
                },
                { 
                    id: 'physical-h3', 
                    name: 'Physical Education', 
                    professor: 'Zinedine Zidane', 
                    img: 'img/modules/pe.jpg',
                    description: 'BAC Physical Education - Third Year Secondary',
                    files: []
                }
            ]
        }
    };

    // Comprehensive Professors Database
    const professorsDatabase = {
        // Primary School Professors
        'Ahmed Mahmoud': {
            name: 'Ahmed Mahmoud',
            subject: 'Arabic Language',
            level: 'Primary',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=AM',
            qualification: 'Master in Arabic Literature',
            experience: '8 years',
            email: 'ahmed.mahmoud@dncschool.edu',
            specialization: 'Arabic Language & Literature'
        },
        'Youssef Ali': {
            name: 'Youssef Ali',
            subject: 'Mathematics',
            level: 'Primary',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=YA',
            qualification: 'Bachelor in Mathematics Education',
            experience: '6 years',
            email: 'youssef.ali@dncschool.edu',
            specialization: 'Elementary Mathematics'
        },
        'Omar Khalid': {
            name: 'Omar Khalid',
            subject: 'Islamic Education',
            level: 'Primary',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=OK',
            qualification: 'Bachelor in Islamic Studies',
            experience: '10 years',
            email: 'omar.khalid@dncschool.edu',
            specialization: 'Islamic Education & Quran'
        },
        'Amina Said': {
            name: 'Amina Said',
            subject: 'Civic Education',
            level: 'Primary',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=AS',
            qualification: 'Bachelor in Social Sciences',
            experience: '5 years',
            email: 'amina.said@dncschool.edu',
            specialization: 'Civic Education & Social Studies'
        },
        'Karim Benali': {
            name: 'Karim Benali',
            subject: 'Physical Education',
            level: 'Primary',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=KB',
            qualification: 'Bachelor in Physical Education',
            experience: '7 years',
            email: 'karim.benali@dncschool.edu',
            specialization: 'Physical Education & Sports'
        },
        'Leila Ahmed': {
            name: 'Leila Ahmed',
            subject: 'Arabic Language',
            level: 'Primary',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/E67E22/FFFFFF?text=LA',
            qualification: 'Master in Arabic Language',
            experience: '9 years',
            email: 'leila.ahmed@dncschool.edu',
            specialization: 'Arabic Language Teaching'
        },
        'Karim Belkacem': {
            name: 'Karim Belkacem',
            subject: 'Mathematics',
            level: 'Primary',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/3498DB/FFFFFF?text=KB',
            qualification: 'Bachelor in Mathematics',
            experience: '6 years',
            email: 'karim.belkacem@dncschool.edu',
            specialization: 'Elementary Mathematics'
        },
        'Fatima Zahra': {
            name: 'Fatima Zahra',
            subject: 'Islamic Education',
            level: 'Primary',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/E91E63/FFFFFF?text=FZ',
            qualification: 'Bachelor in Islamic Studies',
            experience: '8 years',
            email: 'fatima.zahra@dncschool.edu',
            specialization: 'Islamic Education'
        },
        'Nadia Bouzid': {
            name: 'Nadia Bouzid',
            subject: 'Civic Education',
            level: 'Primary',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=NB',
            qualification: 'Master in Education',
            experience: '7 years',
            email: 'nadia.bouzid@dncschool.edu',
            specialization: 'Civic Education'
        },
        'Samir Hamdi': {
            name: 'Samir Hamdi',
            subject: 'Physical Education',
            level: 'Primary',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/16A085/FFFFFF?text=SH',
            qualification: 'Bachelor in Sports Science',
            experience: '5 years',
            email: 'samir.hamdi@dncschool.edu',
            specialization: 'Physical Education'
        },
        'Maryam Boudiaf': {
            name: 'Maryam Boudiaf',
            subject: 'Arabic Language',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/D35400/FFFFFF?text=MB',
            qualification: 'Master in Arabic Literature',
            experience: '10 years',
            email: 'maryam.boudiaf@dncschool.edu',
            specialization: 'Arabic Grammar & Literature'
        },
        'Rachid Khelifi': {
            name: 'Rachid Khelifi',
            subject: 'Mathematics',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/2980B9/FFFFFF?text=RK',
            qualification: 'Bachelor in Mathematics Education',
            experience: '8 years',
            email: 'rachid.khelifi@dncschool.edu',
            specialization: 'Elementary Mathematics'
        },
        'Sophie Martin': {
            name: 'Sophie Martin',
            subject: 'French Language',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/C0392B/FFFFFF?text=SM',
            qualification: 'Master in French Literature',
            experience: '12 years',
            email: 'sophie.martin@dncschool.edu',
            specialization: 'French Language & Culture'
        },
        'Amina Cherif': {
            name: 'Amina Cherif',
            subject: 'Science and Technology',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/7F8C8D/FFFFFF?text=AC',
            qualification: 'Bachelor in Science Education',
            experience: '6 years',
            email: 'amina.cherif@dncschool.edu',
            specialization: 'Elementary Science'
        },
        'Ali Benali': {
            name: 'Ali Benali',
            subject: 'Islamic Education',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=AB',
            qualification: 'Master in Islamic Studies',
            experience: '11 years',
            email: 'ali.benali@dncschool.edu',
            specialization: 'Islamic Education & Ethics'
        },
        'Yasmin Touati': {
            name: 'Yasmin Touati',
            subject: 'History',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F1C40F/FFFFFF?text=YT',
            qualification: 'Bachelor in History',
            experience: '7 years',
            email: 'yasmin.touati@dncschool.edu',
            specialization: 'History & Heritage'
        },
        'Mourad Zidane': {
            name: 'Mourad Zidane',
            subject: 'Geography',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/95A5A6/FFFFFF?text=MZ',
            qualification: 'Bachelor in Geography',
            experience: '6 years',
            email: 'mourad.zidane@dncschool.edu',
            specialization: 'Geography & Environment'
        },
        'Samia Kaci': {
            name: 'Samia Kaci',
            subject: 'Civic Education',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/AF7AC5/FFFFFF?text=SK',
            qualification: 'Master in Social Sciences',
            experience: '9 years',
            email: 'samia.kaci@dncschool.edu',
            specialization: 'Civic Education'
        },
        'Zinedine Hamdi': {
            name: 'Zinedine Hamdi',
            subject: 'Physical Education',
            level: 'Primary',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/58D68D/FFFFFF?text=ZH',
            qualification: 'Master in Sports Science',
            experience: '8 years',
            email: 'zinedine.hamdi@dncschool.edu',
            specialization: 'Physical Education & Sports'
        },
        // Year 4 & 5 Primary Professors
        'Nawal Bensaad': {
            name: 'Nawal Bensaad',
            subject: 'Arabic Language',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/E8743B/FFFFFF?text=NB',
            qualification: 'Master in Arabic Literature',
            experience: '12 years',
            email: 'nawal.bensaad@dncschool.edu',
            specialization: 'Advanced Arabic Grammar'
        },
        'Farid Boudjemaa': {
            name: 'Farid Boudjemaa',
            subject: 'Mathematics',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/19B5FE/FFFFFF?text=FB',
            qualification: 'Master in Mathematics Education',
            experience: '10 years',
            email: 'farid.boudjemaa@dncschool.edu',
            specialization: 'Advanced Mathematics'
        },
        'Claire Dubois': {
            name: 'Claire Dubois',
            subject: 'French Language',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/BF55EC/FFFFFF?text=CD',
            qualification: 'Master in French Education',
            experience: '11 years',
            email: 'claire.dubois@dncschool.edu',
            specialization: 'French Language & Grammar'
        },
        'Nabil Rachedi': {
            name: 'Nabil Rachedi',
            subject: 'Science and Technology',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/26A65B/FFFFFF?text=NR',
            qualification: 'Master in Science Education',
            experience: '9 years',
            email: 'nabil.rachedi@dncschool.edu',
            specialization: 'Science & Technology'
        },
        'Khadija Merad': {
            name: 'Khadija Merad',
            subject: 'Islamic Education',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F62459/FFFFFF?text=KM',
            qualification: 'Master in Islamic Studies',
            experience: '13 years',
            email: 'khadija.merad@dncschool.edu',
            specialization: 'Islamic Principles & Ethics'
        },
        'Khaled Belkacem': {
            name: 'Khaled Belkacem',
            subject: 'History',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F7CA18/FFFFFF?text=KB',
            qualification: 'Bachelor in History',
            experience: '8 years',
            email: 'khaled.belkacem@dncschool.edu',
            specialization: 'Algerian & World History'
        },
        'Leila Boudiaf': {
            name: 'Leila Boudiaf',
            subject: 'Geography',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/87D37C/FFFFFF?text=LB',
            qualification: 'Bachelor in Geography',
            experience: '7 years',
            email: 'leila.boudiaf@dncschool.edu',
            specialization: 'Geography of Algeria'
        },
        'Omar Khemissi': {
            name: 'Omar Khemissi',
            subject: 'Civic Education',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/A2DED0/FFFFFF?text=OK',
            qualification: 'Master in Social Sciences',
            experience: '10 years',
            email: 'omar.khemissi@dncschool.edu',
            specialization: 'Citizenship & Social Values'
        },
        'Riad Belhaddad': {
            name: 'Riad Belhaddad',
            subject: 'Physical Education',
            level: 'Primary',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F8B500/FFFFFF?text=RB',
            qualification: 'Master in Sports Science',
            experience: '9 years',
            email: 'riad.belhaddad@dncschool.edu',
            specialization: 'Advanced Sports & Fitness'
        },
        'Aicha Boutella': {
            name: 'Aicha Boutella',
            subject: 'Arabic Language',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/EC644B/FFFFFF?text=AB',
            qualification: 'PhD in Arabic Literature',
            experience: '15 years',
            email: 'aicha.boutella@dncschool.edu',
            specialization: 'Arabic Literature & Composition'
        },
        'Yacine Hamdani': {
            name: 'Yacine Hamdani',
            subject: 'Mathematics',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/3A539B/FFFFFF?text=YH',
            qualification: 'Master in Mathematics',
            experience: '12 years',
            email: 'yacine.hamdani@dncschool.edu',
            specialization: 'Advanced Mathematics & Geometry'
        },
        'Marie Bensalem': {
            name: 'Marie Bensalem',
            subject: 'French Language',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=MB',
            qualification: 'Master in French Literature',
            experience: '14 years',
            email: 'marie.bensalem@dncschool.edu',
            specialization: 'Advanced French Language'
        },
        'Nassim Khelif': {
            name: 'Nassim Khelif',
            subject: 'Science and Technology',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=NK',
            qualification: 'Master in Science Education',
            experience: '11 years',
            email: 'nassim.khelif@dncschool.edu',
            specialization: 'Advanced Science & Technology'
        },
        'Abderrahim Zidane': {
            name: 'Abderrahim Zidane',
            subject: 'Islamic Education',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=AZ',
            qualification: 'PhD in Islamic Studies',
            experience: '16 years',
            email: 'abderrahim.zidane@dncschool.edu',
            specialization: 'Islamic Studies & Moral Values'
        },
        'Nawel Boudiaf': {
            name: 'Nawel Boudiaf',
            subject: 'History',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=NB',
            qualification: 'Master in History',
            experience: '10 years',
            email: 'nawel.boudiaf@dncschool.edu',
            specialization: 'Comprehensive History Studies'
        },
        'Amine Cherif': {
            name: 'Amine Cherif',
            subject: 'Geography',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=AC',
            qualification: 'Master in Geography',
            experience: '9 years',
            email: 'amine.cherif@dncschool.edu',
            specialization: 'Environmental Studies'
        },
        'Soraya Kaci': {
            name: 'Soraya Kaci',
            subject: 'Civic Education',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=SK',
            qualification: 'PhD in Social Sciences',
            experience: '12 years',
            email: 'soraya.kaci@dncschool.edu',
            specialization: 'Advanced Civic Education'
        },
        'Mehdi Touati': {
            name: 'Mehdi Touati',
            subject: 'Physical Education',
            level: 'Primary',
            years: ['5'],
            photo: 'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=MT',
            qualification: 'Master in Sports Science',
            experience: '10 years',
            email: 'mehdi.touati@dncschool.edu',
            specialization: 'Comprehensive Physical Education'
        },
        // Middle School Professors
        'Fatima Benali': {
            name: 'Fatima Benali',
            subject: 'Arabic Language',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=FB',
            qualification: 'Master in Arabic Literature',
            experience: '12 years',
            email: 'fatima.benali@dncschool.edu',
            specialization: 'Arabic Language & Literature'
        },
        'Yasmin Boudiaf': {
            name: 'Yasmin Boudiaf',
            subject: 'Mathematics',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/3498DB/FFFFFF?text=YB',
            qualification: 'Master in Mathematics Education',
            experience: '10 years',
            email: 'yasmin.boudiaf@dncschool.edu',
            specialization: 'Algebra & Geometry'
        },
        'Claire Dubois': {
            name: 'Claire Dubois',
            subject: 'French Language',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=CD',
            qualification: 'Master in French Literature',
            experience: '11 years',
            email: 'claire.dubois@dncschool.edu',
            specialization: 'French Language & Grammar'
        },
        'Sarah Johnson': {
            name: 'Sarah Johnson',
            subject: 'English Language',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/E67E22/FFFFFF?text=SJ',
            qualification: 'Master in English Literature',
            experience: '9 years',
            email: 'sarah.johnson@dncschool.edu',
            specialization: 'English Language & Literature'
        },
        'Omar Khelifi': {
            name: 'Omar Khelifi',
            subject: 'Islamic Education',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=OK',
            qualification: 'Master in Islamic Studies',
            experience: '13 years',
            email: 'omar.khelifi@dncschool.edu',
            specialization: 'Islamic Studies & Values'
        },
        'Karim Boudjemaa': {
            name: 'Karim Boudjemaa',
            subject: 'History and Geography',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=KB',
            qualification: 'Master in History & Geography',
            experience: '8 years',
            email: 'karim.boudjemaa@dncschool.edu',
            specialization: 'History & Geography Studies'
        },
        'Amina Touati': {
            name: 'Amina Touati',
            subject: 'Civic Education',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=AT',
            qualification: 'Master in Social Sciences',
            experience: '7 years',
            email: 'amina.touati@dncschool.edu',
            specialization: 'Civic Education & Citizenship'
        },
        'Mourad Cherif': {
            name: 'Mourad Cherif',
            subject: 'Natural Sciences',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/16A085/FFFFFF?text=MC',
            qualification: 'Master in Biology',
            experience: '9 years',
            email: 'mourad.cherif@dncschool.edu',
            specialization: 'Natural Sciences & Biology'
        },
        'Ali Rachedi': {
            name: 'Ali Rachedi',
            subject: 'Physical Sciences',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/D35400/FFFFFF?text=AR',
            qualification: 'Master in Physics & Chemistry',
            experience: '11 years',
            email: 'ali.rachedi@dncschool.edu',
            specialization: 'Physics & Chemistry'
        },
        'Mehdi Zidane': {
            name: 'Mehdi Zidane',
            subject: 'Computer Science',
            level: 'Middle',
            years: ['1', '4'],
            photo: 'https://via.placeholder.com/200x200/2980B9/FFFFFF?text=MZ',
            qualification: 'Master in Computer Science',
            experience: '6 years',
            email: 'mehdi.zidane@dncschool.edu',
            specialization: 'Programming & Computer Skills'
        },
        'Leila Bensaad': {
            name: 'Leila Bensaad',
            subject: 'Art Education',
            level: 'Middle',
            years: ['1', '4'],
            photo: 'https://via.placeholder.com/200x200/C0392B/FFFFFF?text=LB',
            qualification: 'Bachelor in Fine Arts',
            experience: '8 years',
            email: 'leila.bensaad@dncschool.edu',
            specialization: 'Visual Arts & Creativity'
        },
        'Yacine Hamdi': {
            name: 'Yacine Hamdi',
            subject: 'Music Education',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/7F8C8D/FFFFFF?text=YH',
            qualification: 'Bachelor in Music',
            experience: '7 years',
            email: 'yacine.hamdi@dncschool.edu',
            specialization: 'Music Theory & Practice'
        },
        'Riad Belhadj': {
            name: 'Riad Belhadj',
            subject: 'Physical Education',
            level: 'Middle',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=RB',
            qualification: 'Master in Sports Science',
            experience: '9 years',
            email: 'riad.belhadj@dncschool.edu',
            specialization: 'Physical Education & Sports'
        },
        // Year 2-4 Middle School Professors
        'Nawal Kaci': {
            name: 'Nawal Kaci',
            subject: 'Arabic Language',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/E8743B/FFFFFF?text=NK',
            qualification: 'PhD in Arabic Literature',
            experience: '15 years',
            email: 'nawal.kaci@dncschool.edu',
            specialization: 'Advanced Arabic Language'
        },
        'Farid Boukadoum': {
            name: 'Farid Boukadoum',
            subject: 'Mathematics',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/19B5FE/FFFFFF?text=FB',
            qualification: 'Master in Mathematics',
            experience: '12 years',
            email: 'farid.boukadoum@dncschool.edu',
            specialization: 'Advanced Algebra & Geometry'
        },
        'Marie Dubois': {
            name: 'Marie Dubois',
            subject: 'French Language',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/BF55EC/FFFFFF?text=MD',
            qualification: 'Master in French Literature',
            experience: '13 years',
            email: 'marie.dubois@dncschool.edu',
            specialization: 'Intermediate French'
        },
        'Jennifer Smith': {
            name: 'Jennifer Smith',
            subject: 'English Language',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/26A65B/FFFFFF?text=JS',
            qualification: 'Master in English Education',
            experience: '10 years',
            email: 'jennifer.smith@dncschool.edu',
            specialization: 'Intermediate English'
        },
        'Abderrahim Benali': {
            name: 'Abderrahim Benali',
            subject: 'Islamic Education',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/F62459/FFFFFF?text=AB',
            qualification: 'Master in Islamic Studies',
            experience: '14 years',
            email: 'abderrahim.benali@dncschool.edu',
            specialization: 'Islamic Studies & Ethics'
        },
        'Khaled Merad': {
            name: 'Khaled Merad',
            subject: 'History and Geography',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/F7CA18/FFFFFF?text=KM',
            qualification: 'Master in History & Geography',
            experience: '11 years',
            email: 'khaled.merad@dncschool.edu',
            specialization: 'World History & Geography'
        },
        'Soraya Boudiaf': {
            name: 'Soraya Boudiaf',
            subject: 'Civic Education',
            level: 'Middle',
            years: ['2', '4'],
            photo: 'https://via.placeholder.com/200x200/87D37C/FFFFFF?text=SB',
            qualification: 'PhD in Social Sciences',
            experience: '16 years',
            email: 'soraya.boudiaf@dncschool.edu',
            specialization: 'Advanced Civic Education'
        },
        'Nadia Cherif': {
            name: 'Nadia Cherif',
            subject: 'Natural Sciences',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/A2DED0/FFFFFF?text=NC',
            qualification: 'Master in Biology',
            experience: '10 years',
            email: 'nadia.cherif@dncschool.edu',
            specialization: 'Biology & Natural Sciences'
        },
        'Nabil Rachedi': {
            name: 'Nabil Rachedi',
            subject: 'Physical Sciences',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/F8B500/FFFFFF?text=NR',
            qualification: 'Master in Physics & Chemistry',
            experience: '12 years',
            email: 'nabil.rachedi@dncschool.edu',
            specialization: 'Physics & Chemistry'
        },
        'Amine Zidane': {
            name: 'Amine Zidane',
            subject: 'Computer Science',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/EC644B/FFFFFF?text=AZ',
            qualification: 'Master in Computer Science',
            experience: '8 years',
            email: 'amine.zidane@dncschool.edu',
            specialization: 'Computer Programming Basics'
        },
        'Aicha Bensaad': {
            name: 'Aicha Bensaad',
            subject: 'Art Education',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/3A539B/FFFFFF?text=AB',
            qualification: 'Master in Fine Arts',
            experience: '9 years',
            email: 'aicha.bensaad@dncschool.edu',
            specialization: 'Advanced Visual Arts'
        },
        'Nassim Hamdi': {
            name: 'Nassim Hamdi',
            subject: 'Music Education',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=NH',
            qualification: 'Master in Music',
            experience: '8 years',
            email: 'nassim.hamdi@dncschool.edu',
            specialization: 'Music Composition & Theory'
        },
        'Mehdi Belhadj': {
            name: 'Mehdi Belhadj',
            subject: 'Physical Education',
            level: 'Middle',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=MB',
            qualification: 'Master in Sports Science',
            experience: '10 years',
            email: 'mehdi.belhadj@dncschool.edu',
            specialization: 'Advanced Physical Education'
        },
        // Year 3 & 4 Middle School Professors
        'Khadija Boutella': {
            name: 'Khadija Boutella',
            subject: 'Arabic Language',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=KB',
            qualification: 'PhD in Arabic Literature',
            experience: '18 years',
            email: 'khadija.boutella@dncschool.edu',
            specialization: 'Arabic Literature & Composition'
        },
        'Yacine Hamdani': {
            name: 'Yacine Hamdani',
            subject: 'Mathematics',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=YH',
            qualification: 'Master in Mathematics',
            experience: '13 years',
            email: 'yacine.hamdani@dncschool.edu',
            specialization: 'Advanced Mathematics'
        },
        'Sophie Bensalem': {
            name: 'Sophie Bensalem',
            subject: 'French Language',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=SB',
            qualification: 'Master in French Literature',
            experience: '14 years',
            email: 'sophie.bensalem@dncschool.edu',
            specialization: 'Advanced French Language'
        },
        'Emma Wilson': {
            name: 'Emma Wilson',
            subject: 'English Language',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=EW',
            qualification: 'Master in English Literature',
            experience: '11 years',
            email: 'emma.wilson@dncschool.edu',
            specialization: 'Advanced English'
        },
        'Mohamed Khelifi': {
            name: 'Mohamed Khelifi',
            subject: 'Islamic Education',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=MK',
            qualification: 'PhD in Islamic Studies',
            experience: '17 years',
            email: 'mohamed.khelifi@dncschool.edu',
            specialization: 'Islamic Civilization & Values'
        },
        'Leila Merad': {
            name: 'Leila Merad',
            subject: 'History and Geography',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F1C40F/FFFFFF?text=LM',
            qualification: 'Master in History & Geography',
            experience: '12 years',
            email: 'leila.merad@dncschool.edu',
            specialization: 'Modern History & Geography'
        },
        'Omar Boudiaf': {
            name: 'Omar Boudiaf',
            subject: 'Civic Education',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/95A5A6/FFFFFF?text=OB',
            qualification: 'Master in Social Sciences',
            experience: '13 years',
            email: 'omar.boudiaf@dncschool.edu',
            specialization: 'Democratic Values & Citizenship'
        },
        'Amina Cherif': {
            name: 'Amina Cherif',
            subject: 'Natural Sciences',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/AF7AC5/FFFFFF?text=AC',
            qualification: 'Master in Biology',
            experience: '11 years',
            email: 'amina.cherif@dncschool.edu',
            specialization: 'Advanced Biology & Ecology'
        },
        'Karim Rachedi': {
            name: 'Karim Rachedi',
            subject: 'Physical Sciences',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/58D68D/FFFFFF?text=KR',
            qualification: 'Master in Physics & Chemistry',
            experience: '13 years',
            email: 'karim.rachedi@dncschool.edu',
            specialization: 'Advanced Physics & Chemistry'
        },
        'Riad Zidane': {
            name: 'Riad Zidane',
            subject: 'Computer Science',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/E8743B/FFFFFF?text=RZ',
            qualification: 'Master in Computer Science',
            experience: '9 years',
            email: 'riad.zidane@dncschool.edu',
            specialization: 'Programming & Algorithms'
        },
        'Maryam Bensaad': {
            name: 'Maryam Bensaad',
            subject: 'Art Education',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/19B5FE/FFFFFF?text=MB',
            qualification: 'Master in Fine Arts',
            experience: '10 years',
            email: 'maryam.bensaad@dncschool.edu',
            specialization: 'Creative Arts & Design'
        },
        'Zinedine Hamdi': {
            name: 'Zinedine Hamdi',
            subject: 'Music Education',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/BF55EC/FFFFFF?text=ZH',
            qualification: 'Master in Music',
            experience: '9 years',
            email: 'zinedine.hamdi@dncschool.edu',
            specialization: 'Advanced Music Theory'
        },
        'Farid Belhadj': {
            name: 'Farid Belhadj',
            subject: 'Physical Education',
            level: 'Middle',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/26A65B/FFFFFF?text=FB',
            qualification: 'Master in Sports Science',
            experience: '11 years',
            email: 'farid.belhadj@dncschool.edu',
            specialization: 'Competitive Sports & Fitness'
        },
        // Year 4 BEM Preparation Professors
        'Aicha Kaci': {
            name: 'Aicha Kaci',
            subject: 'Arabic Language',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F62459/FFFFFF?text=AK',
            qualification: 'PhD in Arabic Literature',
            experience: '20 years',
            email: 'aicha.kaci@dncschool.edu',
            specialization: 'BEM Arabic Literature Preparation'
        },
        'Rachid Hamdani': {
            name: 'Rachid Hamdani',
            subject: 'Mathematics',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F7CA18/FFFFFF?text=RH',
            qualification: 'Master in Mathematics Education',
            experience: '15 years',
            email: 'rachid.hamdani@dncschool.edu',
            specialization: 'BEM Mathematics Preparation'
        },
        'Claire Bensalem': {
            name: 'Claire Bensalem',
            subject: 'French Language',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/87D37C/FFFFFF?text=CB',
            qualification: 'Master in French Literature',
            experience: '16 years',
            email: 'claire.bensalem@dncschool.edu',
            specialization: 'BEM French Preparation'
        },
        'Sarah Wilson': {
            name: 'Sarah Wilson',
            subject: 'English Language',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/A2DED0/FFFFFF?text=SW',
            qualification: 'Master in English Education',
            experience: '12 years',
            email: 'sarah.wilson@dncschool.edu',
            specialization: 'BEM English Preparation'
        },
        'Ali Khelifi': {
            name: 'Ali Khelifi',
            subject: 'Islamic Education',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F8B500/FFFFFF?text=AK',
            qualification: 'PhD in Islamic Studies',
            experience: '18 years',
            email: 'ali.khelifi@dncschool.edu',
            specialization: 'BEM Islamic Studies'
        },
        'Nawel Merad': {
            name: 'Nawel Merad',
            subject: 'History and Geography',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/EC644B/FFFFFF?text=NM',
            qualification: 'Master in History & Geography',
            experience: '14 years',
            email: 'nawel.merad@dncschool.edu',
            specialization: 'BEM History & Geography'
        },
        'Nabil Cherif': {
            name: 'Nabil Cherif',
            subject: 'Natural Sciences',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/3A539B/FFFFFF?text=NC',
            qualification: 'Master in Biology',
            experience: '13 years',
            email: 'nabil.cherif@dncschool.edu',
            specialization: 'BEM Natural Sciences'
        },
        'Yasmin Rachedi': {
            name: 'Yasmin Rachedi',
            subject: 'Physical Sciences',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=YR',
            qualification: 'Master in Physics & Chemistry',
            experience: '14 years',
            email: 'yasmin.rachedi@dncschool.edu',
            specialization: 'BEM Physics & Chemistry'
        },
        'Amine Hamdi': {
            name: 'Amine Hamdi',
            subject: 'Music Education',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=AH',
            qualification: 'Master in Music Performance',
            experience: '10 years',
            email: 'amine.hamdi@dncschool.edu',
            specialization: 'Music Performance'
        },
        'Karim Belhadj': {
            name: 'Karim Belhadj',
            subject: 'Physical Education',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=KB',
            qualification: 'Master in Sports Science',
            experience: '12 years',
            email: 'karim.belhadj@dncschool.edu',
            specialization: 'Athletic Preparation'
        },
        'Dihya Amellal': {
            name: 'Dihya Amellal',
            subject: 'Tamazight Language',
            level: 'Middle',
            years: ['4'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=DA',
            qualification: 'Master in Berber Studies',
            experience: '8 years',
            email: 'dihya.amellal@dncschool.edu',
            specialization: 'Berber Language & Culture'
        },
        // Secondary School Professors
        'Sofia Boutella': {
            name: 'Sofia Boutella',
            subject: 'Arabic Language',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=SB',
            qualification: 'PhD in Arabic Literature',
            experience: '18 years',
            email: 'sofia.boutella@dncschool.edu',
            specialization: 'Advanced Arabic Literature'
        },
        'Karima Bensaad': {
            name: 'Karima Bensaad',
            subject: 'Mathematics',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/3498DB/FFFFFF?text=KB',
            qualification: 'PhD in Mathematics',
            experience: '20 years',
            email: 'karima.bensaad@dncschool.edu',
            specialization: 'Advanced Mathematics & Analysis'
        },
        'Claire Moreau': {
            name: 'Claire Moreau',
            subject: 'French Language',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=CM',
            qualification: 'Master in French Literature',
            experience: '15 years',
            email: 'claire.moreau@dncschool.edu',
            specialization: 'Advanced French Literature'
        },
        'Jennifer Smith': {
            name: 'Jennifer Smith',
            subject: 'English Language',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/E67E22/FFFFFF?text=JS',
            qualification: 'Master in English Literature',
            experience: '12 years',
            email: 'jennifer.smith@dncschool.edu',
            specialization: 'Advanced English Literature'
        },
        'Omar Benali': {
            name: 'Omar Benali',
            subject: 'Islamic Sciences',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=OB',
            qualification: 'PhD in Islamic Studies',
            experience: '22 years',
            email: 'omar.benali@dncschool.edu',
            specialization: 'Islamic Jurisprudence'
        },
        'Ali Khemissi': {
            name: 'Ali Khemissi',
            subject: 'History and Geography',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=AK',
            qualification: 'Master in History & Geography',
            experience: '16 years',
            email: 'ali.khemissi@dncschool.edu',
            specialization: 'World History & Geography'
        },
        'Yacine Belhaddad': {
            name: 'Yacine Belhaddad',
            subject: 'Philosophy',
            level: 'High',
            years: ['1', '3'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=YB',
            qualification: 'PhD in Philosophy',
            experience: '25 years',
            email: 'yacine.belhaddad@dncschool.edu',
            specialization: 'Ethics & Logic'
        },
        'Nadir Hamdani': {
            name: 'Nadir Hamdani',
            subject: 'Physical Sciences',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/16A085/FFFFFF?text=NH',
            qualification: 'PhD in Physics',
            experience: '19 years',
            email: 'nadir.hamdani@dncschool.edu',
            specialization: 'Advanced Physics & Chemistry'
        },
        'Amina Cherif': {
            name: 'Amina Cherif',
            subject: 'Natural Sciences',
            level: 'High',
            years: ['1'],
            photo: 'https://via.placeholder.com/200x200/D35400/FFFFFF?text=AC',
            qualification: 'PhD in Biology',
            experience: '17 years',
            email: 'amina.cherif@dncschool.edu',
            specialization: 'Advanced Biology & Life Sciences'
        },
        'Zinedine Zidane': {
            name: 'Zinedine Zidane',
            subject: 'Physical Education',
            level: 'High',
            years: ['1', '3'],
            photo: 'https://via.placeholder.com/200x200/2980B9/FFFFFF?text=ZZ',
            qualification: 'Master in Sports Science',
            experience: '15 years',
            email: 'zinedine.zidane@dncschool.edu',
            specialization: 'Elite Sports & Fitness'
        },
        // Year 2 & 3 Secondary Professors
        'Nawal Boutella': {
            name: 'Nawal Boutella',
            subject: 'Arabic Language',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/C0392B/FFFFFF?text=NB',
            qualification: 'PhD in Arabic Literature',
            experience: '20 years',
            email: 'nawal.boutella@dncschool.edu',
            specialization: 'Arabic Literature & Composition'
        },
        'Rachid Belkacem': {
            name: 'Rachid Belkacem',
            subject: 'Mathematics',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/7F8C8D/FFFFFF?text=RB',
            qualification: 'PhD in Mathematics',
            experience: '22 years',
            email: 'rachid.belkacem@dncschool.edu',
            specialization: 'Calculus & Advanced Analysis'
        },
        'Marie Dubois': {
            name: 'Marie Dubois',
            subject: 'French Language',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=MD',
            qualification: 'Master in French Literature',
            experience: '18 years',
            email: 'marie.dubois@dncschool.edu',
            specialization: 'Advanced French Literature'
        },
        'Emma Wilson': {
            name: 'Emma Wilson',
            subject: 'English Language',
            level: 'High',
            years: ['2', '3'],
            photo: 'https://via.placeholder.com/200x200/F1C40F/FFFFFF?text=EW',
            qualification: 'Master in English Literature',
            experience: '14 years',
            email: 'emma.wilson@dncschool.edu',
            specialization: 'Advanced English Composition'
        },
        'Ali Khelifi': {
            name: 'Ali Khelifi',
            subject: 'Islamic Sciences',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/95A5A6/FFFFFF?text=AK',
            qualification: 'PhD in Islamic Studies',
            experience: '24 years',
            email: 'ali.khelifi@dncschool.edu',
            specialization: 'Advanced Islamic Studies'
        },
        'Leila Merad': {
            name: 'Leila Merad',
            subject: 'History and Geography',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/AF7AC5/FFFFFF?text=LM',
            qualification: 'Master in History & Geography',
            experience: '16 years',
            email: 'leila.merad@dncschool.edu',
            specialization: 'Modern History & World Geography'
        },
        'Rachid Belhaddad': {
            name: 'Rachid Belhaddad',
            subject: 'Philosophy',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/58D68D/FFFFFF?text=RB',
            qualification: 'PhD in Philosophy',
            experience: '20 years',
            email: 'rachid.belhaddad@dncschool.edu',
            specialization: 'Ethics & Logic'
        },
        'Nassima Boudiaf': {
            name: 'Nassima Boudiaf',
            subject: 'Physical Sciences',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/E8743B/FFFFFF?text=NB',
            qualification: 'PhD in Physics',
            experience: '18 years',
            email: 'nassima.boudiaf@dncschool.edu',
            specialization: 'Advanced Physics & Chemistry'
        },
        'Samia Cherif': {
            name: 'Samia Cherif',
            subject: 'Natural Sciences',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/19B5FE/FFFFFF?text=SC',
            qualification: 'PhD in Biology',
            experience: '19 years',
            email: 'samia.cherif@dncschool.edu',
            specialization: 'Molecular Biology & Genetics'
        },
        'Khaled Merad': {
            name: 'Khaled Merad',
            subject: 'Economics',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/BF55EC/FFFFFF?text=KM',
            qualification: 'Master in Economics',
            experience: '15 years',
            email: 'khaled.merad@dncschool.edu',
            specialization: 'Economic Principles & Management'
        },
        'Mehdi Belhadj': {
            name: 'Mehdi Belhadj',
            subject: 'Physical Education',
            level: 'High',
            years: ['2'],
            photo: 'https://via.placeholder.com/200x200/26A65B/FFFFFF?text=MB',
            qualification: 'Master in Sports Science',
            experience: '13 years',
            email: 'mehdi.belhadj@dncschool.edu',
            specialization: 'Competitive Sports & Fitness'
        },
        // Year 3 BAC Preparation Specialists
        'Aicha Kaci': {
            name: 'Aicha Kaci',
            subject: 'Arabic Language',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F62459/FFFFFF?text=AK',
            qualification: 'PhD in Arabic Literature',
            experience: '25 years',
            email: 'aicha.kaci@dncschool.edu',
            specialization: 'BAC Arabic Literature Preparation'
        },
        'Amine Boudiaf': {
            name: 'Amine Boudiaf',
            subject: 'Mathematics',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F7CA18/FFFFFF?text=AB',
            qualification: 'PhD in Mathematics',
            experience: '23 years',
            email: 'amine.boudiaf@dncschool.edu',
            specialization: 'BAC Mathematics Preparation'
        },
        'Sophie Bensalem': {
            name: 'Sophie Bensalem',
            subject: 'French Language',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/87D37C/FFFFFF?text=SB',
            qualification: 'Master in French Literature',
            experience: '20 years',
            email: 'sophie.bensalem@dncschool.edu',
            specialization: 'BAC French Preparation'
        },
        'Mohamed Khelifi': {
            name: 'Mohamed Khelifi',
            subject: 'Islamic Sciences',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/A2DED0/FFFFFF?text=MK',
            qualification: 'PhD in Islamic Studies',
            experience: '26 years',
            email: 'mohamed.khelifi@dncschool.edu',
            specialization: 'BAC Islamic Studies Preparation'
        },
        'Nawel Khelif': {
            name: 'Nawel Khelif',
            subject: 'Physical Sciences',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F8B500/FFFFFF?text=NK',
            qualification: 'PhD in Physics',
            experience: '21 years',
            email: 'nawel.khelif@dncschool.edu',
            specialization: 'BAC Physics & Chemistry'
        },
        'Nabil Cherif': {
            name: 'Nabil Cherif',
            subject: 'Natural Sciences',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/EC644B/FFFFFF?text=NC',
            qualification: 'PhD in Biology',
            experience: '20 years',
            email: 'nabil.cherif@dncschool.edu',
            specialization: 'BAC Natural Sciences'
        },
        'Soraya Boudiaf': {
            name: 'Soraya Boudiaf',
            subject: 'Economics and Management',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/3A539B/FFFFFF?text=SB',
            qualification: 'PhD in Economics',
            experience: '18 years',
            email: 'soraya.boudiaf@dncschool.edu',
            specialization: 'Economics & Business Management'
        },
        'Omar Khemissi': {
            name: 'Omar Khemissi',
            subject: 'Accounting and Finance',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=OK',
            qualification: 'Master in Finance',
            experience: '16 years',
            email: 'omar.khemissi@dncschool.edu',
            specialization: 'Financial Accounting & Management'
        },
        'Leila Boudiaf': {
            name: 'Leila Boudiaf',
            subject: 'Law',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=LB',
            qualification: 'Master in Law',
            experience: '14 years',
            email: 'leila.boudiaf@dncschool.edu',
            specialization: 'Legal Studies & Jurisprudence'
        },
        'Riad Belhaddad': {
            name: 'Riad Belhaddad',
            subject: 'Mechanical Engineering',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=RB',
            qualification: 'Master in Mechanical Engineering',
            experience: '15 years',
            email: 'riad.belhaddad@dncschool.edu',
            specialization: 'Mechanical Engineering Principles'
        },
        'Amine Zidane': {
            name: 'Amine Zidane',
            subject: 'Electrical Engineering',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=AZ',
            qualification: 'Master in Electrical Engineering',
            experience: '13 years',
            email: 'amine.zidane@dncschool.edu',
            specialization: 'Electrical Engineering & Electronics'
        },
        'Mehdi Touati': {
            name: 'Mehdi Touati',
            subject: 'Civil Engineering',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=MT',
            qualification: 'Master in Civil Engineering',
            experience: '12 years',
            email: 'mehdi.touati@dncschool.edu',
            specialization: 'Civil Engineering & Construction'
        },
        'Nawal Bensaad': {
            name: 'Nawal Bensaad',
            subject: 'Process Engineering',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=NB',
            qualification: 'Master in Chemical Engineering',
            experience: '14 years',
            email: 'nawal.bensaad@dncschool.edu',
            specialization: 'Chemical & Process Engineering'
        },
        'Hans Mueller': {
            name: 'Hans Mueller',
            subject: 'German Language',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=HM',
            qualification: 'Master in German Literature',
            experience: '10 years',
            email: 'hans.mueller@dncschool.edu',
            specialization: 'German Language & Culture'
        },
        'Maria Rodriguez': {
            name: 'Maria Rodriguez',
            subject: 'Spanish Language',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/E67E22/FFFFFF?text=MR',
            qualification: 'Master in Spanish Literature',
            experience: '11 years',
            email: 'maria.rodriguez@dncschool.edu',
            specialization: 'Spanish Language & Literature'
        },
        'Giuseppe Rossi': {
            name: 'Giuseppe Rossi',
            subject: 'Italian Language',
            level: 'High',
            years: ['3'],
            photo: 'https://via.placeholder.com/200x200/D35400/FFFFFF?text=GR',
            qualification: 'Master in Italian Literature',
            experience: '9 years',
            email: 'giuseppe.rossi@dncschool.edu',
            specialization: 'Italian Language & Culture'
        }
    };

    const levelFilter = document.getElementById('level-filter');
    const yearFilter = document.getElementById('year-filter');
    const subjectFilter = document.getElementById('subject-filter');
    const termFilter = document.getElementById('term-filter');
    const moduleGrid = document.getElementById('module-grid');
    const professorGrid = document.getElementById('professor-grid');
    
    // New filter elements
    const professorSearch = document.getElementById('professor-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const toggleTraditionalBtn = document.getElementById('toggle-traditional');
    const traditionalFilterSection = document.getElementById('traditional-filter-section');
    const yearCategory = document.getElementById('year-category');
    const yearButtons = document.getElementById('year-buttons');
    const toggleMaterialsBtn = document.getElementById('toggle-materials');
    
    // Filter state
    let currentFilters = {
        level: 'all',
        year: 'all',
        subject: 'all',
        search: ''
    };

    // Initialize the page
    function initPage() {
        populateYearFilter();
        updateSubjectFilter();
        // Don't render modules by default - they're hidden
        renderProfessors();
        initializeQuickFilters();
        initializeSearch();
        initializeMaterialsToggle();
    }
    
    // Initialize materials toggle
    function initializeMaterialsToggle() {
        if (toggleMaterialsBtn) {
            toggleMaterialsBtn.addEventListener('click', function() {
                const isVisible = moduleGrid.style.display !== 'none';
                
                if (isVisible) {
                    // Hide materials
                    moduleGrid.style.display = 'none';
                    this.innerHTML = '<i class="fas fa-book"></i> Show Educational Materials';
                    this.classList.remove('active');
                } else {
                    // Show materials and render them
                    moduleGrid.style.display = 'block';
                    renderModules();
                    this.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Educational Materials';
                    this.classList.add('active');
                }
            });
        }
    }
    
    // Initialize quick filter buttons
    function initializeQuickFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                const value = this.getAttribute('data-value');
                
                // Remove active class from siblings
                const siblings = this.parentElement.querySelectorAll('.filter-btn');
                siblings.forEach(sibling => sibling.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update filter state
                currentFilters[type] = value;
                
                // Update traditional filters to match
                if (type === 'level') {
                    levelFilter.value = value;
                    populateYearFilter();
                    updateYearButtons();
                } else if (type === 'subject') {
                    subjectFilter.value = value;
                }
                
                // Apply filters
                applyFilters();
            });
        });
        
        // Toggle traditional filters
        if (toggleTraditionalBtn) {
            toggleTraditionalBtn.addEventListener('click', function() {
                const isVisible = traditionalFilterSection.style.display !== 'none';
                traditionalFilterSection.style.display = isVisible ? 'none' : 'block';
                this.classList.toggle('active');
            });
        }
    }
    
    // Initialize search functionality
    function initializeSearch() {
        if (professorSearch) {
            professorSearch.addEventListener('input', function() {
                currentFilters.search = this.value.toLowerCase();
                
                // Show/hide clear button
                if (this.value) {
                    clearSearchBtn.classList.add('show');
                } else {
                    clearSearchBtn.classList.remove('show');
                }
                
                applyFilters();
            });
        }
        
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', function() {
                professorSearch.value = '';
                currentFilters.search = '';
                this.classList.remove('show');
                applyFilters();
            });
        }
    }
    
    // Update year buttons based on selected level
    function updateYearButtons() {
        if (!yearButtons) return;
        
        yearButtons.innerHTML = '';
        
        if (currentFilters.level !== 'all') {
            yearCategory.style.display = 'block';
            
            // Add "All Years" button
            const allYearsBtn = document.createElement('button');
            allYearsBtn.className = 'filter-btn active';
            allYearsBtn.setAttribute('data-type', 'year');
            allYearsBtn.setAttribute('data-value', 'all');
            allYearsBtn.innerHTML = '<i class="fas fa-list"></i> All Years';
            yearButtons.appendChild(allYearsBtn);
            
            // Add year-specific buttons
            const years = Object.keys(educationalModules[currentFilters.level] || {});
            years.forEach(year => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn';
                btn.setAttribute('data-type', 'year');
                btn.setAttribute('data-value', year);
                btn.innerHTML = `<i class="fas fa-calendar"></i> Year ${year}`;
                yearButtons.appendChild(btn);
            });
            
            // Add event listeners to new buttons
            yearButtons.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const siblings = yearButtons.querySelectorAll('.filter-btn');
                    siblings.forEach(sibling => sibling.classList.remove('active'));
                    this.classList.add('active');
                    
                    currentFilters.year = this.getAttribute('data-value');
                    yearFilter.value = currentFilters.year;
                    applyFilters();
                });
            });
        } else {
            yearCategory.style.display = 'none';
            currentFilters.year = 'all';
        }
    }
    
    // Apply all filters
    function applyFilters() {
        // Only render modules if they're visible
        if (moduleGrid.style.display !== 'none') {
            renderModules();
        }
        renderProfessors();
    }
    
    // Populate year filter based on selected level
    function populateYearFilter() {
        const level = levelFilter.value
        
        // Clear existing options
        yearFilter.innerHTML = '<option value="all">All Years</option>'
        
        if (level !== 'all') {
            // Enable year filter
            yearFilter.disabled = false
            
            // Add year options based on selected level
            const years = Object.keys(educationalModules[level])
            years.forEach(year => {
                const option = document.createElement('option')
                option.value = year
                option.textContent = `Year ${year}`
                yearFilter.appendChild(option)
            })
        } else {
            // Disable year filter if 'All Levels' is selected
            yearFilter.disabled = true
            subjectFilter.disabled = true
            termFilter.disabled = true
        }
        
        // Update subject filter
        updateSubjectFilter()
    }
    
    // Update subject filter based on selected level and year
    function updateSubjectFilter() {
        const level = levelFilter.value
        const year = yearFilter.value
        
        // Clear existing options
        subjectFilter.innerHTML = '<option value="all">All Subjects</option>'
        
        if (level !== 'all' && year !== 'all') {
            // Enable subject filter
            subjectFilter.disabled = false
            
            // Get unique subjects for the selected level and year
            const subjects = new Set()
            educationalModules[level][year].forEach(module => {
                subjects.add(module.name)
            })
            
            // Add subject options
            subjects.forEach(subject => {
                const option = document.createElement('option')
                option.value = subject
                option.textContent = subject
                subjectFilter.appendChild(option)
            })
        } else {
            // Disable subject filter if 'All Levels' or 'All Years' is selected
            subjectFilter.disabled = true
            termFilter.disabled = true
        }
        
        // Render modules based on filters
        renderModules()
        renderProfessors()
    }
    
    // Render modules based on filters
    function renderModules() {
        const level = levelFilter.value
        const year = yearFilter.value
        const subject = subjectFilter.value
        const term = termFilter.value
        
        // Clear existing content
        moduleGrid.innerHTML = '';
        professorGrid.innerHTML = '';
        
        // If no level is selected, show all modules
        if (level === 'all') {
            Object.keys(educationalModules).forEach(level => {
                Object.keys(educationalModules[level]).forEach(year => {
                    educationalModules[level][year].forEach(module => {
                        if (subject === 'all' || module.name === subject) {
                            createModuleCard(module, level, year);
                        }
                    });
                });
            });
        } 
        // If level is selected but year is not
        else if (year === 'all') {
            Object.keys(educationalModules[level]).forEach(year => {
                educationalModules[level][year].forEach(module => {
                    if (subject === 'all' || module.name === subject) {
                        createModuleCard(module, level, year);
                    }
                });
            });
        } 
        // Both level and year are selected
        else {
            educationalModules[level][year].forEach(module => {
                if (subject === 'all' || module.name === subject) {
                    createModuleCard(module, level, year);
                }
            });
        }
        
        // Show message if no modules found
        if (moduleGrid.children.length === 0) {
            moduleGrid.innerHTML = `
                <div class="no-modules">
                    <i class="fas fa-book-open"></i>
                    <p>No modules found matching your criteria.</p>
                </div>`;
        }
    }
    
    // Create a module card element
    function createModuleCard(module, level, year) {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-image">
                <img src="${module.img}" alt="${module.name}" loading="lazy">
                <span class="module-level">${level.charAt(0).toUpperCase() + level.slice(1)} ${year}</span>
            </div>
            <div class="module-content">
                <h3>${module.name}</h3>
                <div class="module-meta">
                    <span class="professor"><i class="fas fa-chalkboard-teacher"></i> ${module.professor}</span>
                </div>
                <a href="#" class="btn btn-outline module-btn">View Details</a>
            </div>
        `;
        moduleGrid.appendChild(card);
    }
    
    // Render professors based on filters
    function renderProfessors() {
        const level = currentFilters.level;
        const year = currentFilters.year;
        const subject = currentFilters.subject;
        const search = currentFilters.search;
        
        // Clear existing professor content
        professorGrid.innerHTML = '';
        
        // Filter professors based on current selections
        const filteredProfessors = Object.values(professorsDatabase).filter(professor => {
            // Filter by level
            if (level !== 'all' && professor.level.toLowerCase() !== level) {
                return false;
            }
            
            // Filter by year
            if (year !== 'all' && !professor.years.includes(year)) {
                return false;
            }
            
            // Filter by subject
            if (subject !== 'all' && professor.subject !== subject) {
                return false;
            }
            
            // Filter by search term
            if (search) {
                const searchFields = [
                    professor.name,
                    professor.subject,
                    professor.specialization,
                    professor.qualification,
                    professor.level
                ].join(' ').toLowerCase();
                
                if (!searchFields.includes(search)) {
                    return false;
                }
            }
            
            return true;
        });
        
        // Create professor cards
        filteredProfessors.forEach(professor => {
            createProfessorCard(professor);
        });
        
        // Show message if no professors found
        if (filteredProfessors.length === 0) {
            const searchMessage = search ? 
                `No professors found for "${professorSearch.value}". Try a different search term.` :
                'No professors found matching your criteria.';
                
            professorGrid.innerHTML = `
                <div class="no-professors">
                    <i class="fas fa-user-tie"></i>
                    <p>${searchMessage}</p>
                    ${search ? '<button class="btn btn-outline" onclick="clearAllFilters()">Clear All Filters</button>' : ''}
                </div>`;
        }
    }
    
    // Clear all filters function
    window.clearAllFilters = function() {
        // Reset search
        professorSearch.value = '';
        currentFilters.search = '';
        clearSearchBtn.classList.remove('show');
        
        // Reset filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-value') === 'all') {
                btn.classList.add('active');
            }
        });
        
        // Reset filter state
        currentFilters = {
            level: 'all',
            year: 'all',
            subject: 'all',
            search: ''
        };
        
        // Update traditional filters
        levelFilter.value = 'all';
        yearFilter.value = 'all';
        subjectFilter.value = 'all';
        
        // Hide year category
        yearCategory.style.display = 'none';
        
        // Re-render
        populateYearFilter();
        updateSubjectFilter();
        applyFilters();
        
        // Hide materials if they were showing
        if (moduleGrid.style.display !== 'none') {
            moduleGrid.style.display = 'none';
            toggleMaterialsBtn.innerHTML = '<i class="fas fa-book"></i> Show Educational Materials';
            toggleMaterialsBtn.classList.remove('active');
        }
    };
    
    // Create a professor card element
    function createProfessorCard(professor) {
        const card = document.createElement('div');
        card.className = 'professor-card';
        card.innerHTML = `
            <div class="professor-image">
                <img src="${professor.photo}" alt="${professor.name}" loading="lazy">
                <div class="professor-overlay">
                    <div class="professor-contact">
                        <a href="mailto:${professor.email}" class="contact-btn">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="professor-info">
                <h3>${professor.name}</h3>
                <div class="professor-subject">${professor.subject}</div>
                <div class="professor-level">${professor.level} - Year ${professor.years.join(', ')}</div>
                <div class="professor-qualification">${professor.qualification}</div>
                <div class="professor-experience">
                    <i class="fas fa-clock"></i> ${professor.experience}
                </div>
                <div class="professor-specialization">
                    <i class="fas fa-star"></i> ${professor.specialization}
                </div>
            </div>
        `;
        professorGrid.appendChild(card);
    }
    
    // Event listeners
    levelFilter.addEventListener('change', () => {
        populateYearFilter();
        renderModules();
        renderProfessors();
    });
    
    yearFilter.addEventListener('change', () => {
        updateSubjectFilter();
        renderModules();
        renderProfessors();
    });
    
    subjectFilter.addEventListener('change', () => {
        renderModules();
        renderProfessors();
    });
    
    termFilter.addEventListener('change', () => {
        renderModules();
        renderProfessors();
    });
    
    // Quick access button event listeners
    const showPrimaryBtn = document.getElementById('show-primary-btn');
    const showAllBtn = document.getElementById('show-all-btn');
    
    if (showPrimaryBtn) {
        showPrimaryBtn.addEventListener('click', function() {
            console.log('Showing all primary professors...');
            levelFilter.value = 'primary';
            yearFilter.value = 'all';
            subjectFilter.value = 'all';
            currentFilters.level = 'primary';
            currentFilters.year = 'all';
            currentFilters.subject = 'all';
            populateYearFilter();
            updateSubjectFilter();
            applyFilters();
            
            // Scroll to professors section
            setTimeout(() => {
                const professorSection = document.getElementById('professor-grid');
                if (professorSection) {
                    professorSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 300);
        });
    }
    
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            console.log('Showing all professors...');
            levelFilter.value = 'all';
            yearFilter.value = 'all';
            subjectFilter.value = 'all';
            currentFilters.level = 'all';
            currentFilters.year = 'all';
            currentFilters.subject = 'all';
            populateYearFilter();
            updateSubjectFilter();
            applyFilters();
            
            // Scroll to professors section
            setTimeout(() => {
                const professorSection = document.getElementById('professor-grid');
                if (professorSection) {
                    professorSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 300);
        });
    }

    // Initialize the page
    initPage();
});
