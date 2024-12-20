
export default {
   f1() { console.log('f1');},
   f2() { console.log('f2');},
   f4() { console.log('f4')},
   f3(...params) {
    params.forEach(element => {
        console.log(element);
        
    });
   },
   copyright : 'Beau Merle Dec2024, 1.00'
};
