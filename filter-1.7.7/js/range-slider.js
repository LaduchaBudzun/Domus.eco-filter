
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [500, 9999999],
        connect: true,
        step: 1,
        range: {
            'min': [0, 100000],
            'max': [9999999]
        }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);


        //----------


        let from = input0.value
        sessionStorage.setItem('priceStart', from)

        let before = input1.value
        sessionStorage.setItem('priceEnd', before)






        getResponseFilter()
        //---------
    })



    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            console.log(index);
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}

