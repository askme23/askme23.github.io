window.onload = function() {
    let countOfTerms = 0;
    let summ = 0;
    let terms = [];
    const DOMcontainerTerms = document.getElementsByClassName('terms')[0];
    const DOMcountOfTerms = document.getElementsByClassName('count-of-terms')[0];
    
    if (localStorage.getItem('countOfTerms') != '') {
        console.log(1);
        countOfTerms = +localStorage.getItem('countOfTerms');
        DOMcountOfTerms.value = countOfTerms;

        for(let i = 0; i < countOfTerms; ++i) {
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.className = 'term';
            input.dataset.id = i+1;
            input.value = +localStorage.getItem('term'+(i+1));

            DOMcontainerTerms.appendChild(input);
        }

        [].forEach.call(document.getElementsByClassName('term'), function(item) {
            terms[+item.dataset.id] = +item.value;

            item.oninput = function(e) {
                let target = e.target;

                checkForNumber(target);
                terms[+target.dataset.id] = +target.value;
                
                summ = terms.reduce(function(sum, curr) {
                    return sum + curr;
                });
                document.getElementsByClassName('summ')[0].innerHTML = summ;

                localStorage.setItem('term'+target.dataset.id, ''+target.value);
                localStorage.setItem('summ', ''+summ);
            };
        });

        document.getElementsByClassName('summ')[0].innerHTML = +localStorage.getItem('summ');
    }
    
    DOMcountOfTerms.oninput = function(e) {
        let that = e.target;
        localStorage.clear();
        document.getElementsByClassName('summ')[0].innerHTML = 0;
        terms.length = 0;

        checkForNumber(that);

        countOfTerms = +that.value;
        localStorage.setItem('countOfTerms', ''+countOfTerms);

        DOMcontainerTerms.innerHTML = '';
        for(let i = 0; i < countOfTerms; ++i) {
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.className = 'term';
            input.dataset.id = i+1;

            DOMcontainerTerms.appendChild(input);
        }

        [].forEach.call(document.getElementsByClassName('term'), function(item) {
            item.oninput = function(e) {
                let target = e.target;
                
                checkForNumber(target);
                terms[+target.dataset.id] = +target.value;
                
                summ = terms.reduce(function(sum, curr) {
                    return sum + curr;
                });
                document.getElementsByClassName('summ')[0].innerHTML = summ;

                localStorage.setItem('term'+target.dataset.id, ''+target.value);
                localStorage.setItem('summ', ''+summ);
            };
        });
    };
    
};

function checkForNumber(item) {
    if (!/^[0-9]+$/i.test(item.value)) {
        item.value = item.value.substring(0, item.value.length-1);
    }
}