function onlyGoogNews(nota){
    if (nota >= 7) {
        console.log(`Approved with ${nota}`);
    }
}

onlyGoogNews(8.1);
onlyGoogNews(6.1);

function ifTrueISpeak(value){
    if (value) {
        console.log(`Its true... ${value}`);
    }
}

ifTrueISpeak();
ifTrueISpeak(null);
ifTrueISpeak(undefined);
ifTrueISpeak(NaN);
ifTrueISpeak('');
ifTrueISpeak(0);
ifTrueISpeak(-1);
ifTrueISpeak(' ');
ifTrueISpeak('?');
ifTrueISpeak([]);
ifTrueISpeak([1, 2]);
ifTrueISpeak({});