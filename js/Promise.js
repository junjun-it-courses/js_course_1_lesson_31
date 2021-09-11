// Объект Promise используется для отложенных и асинхронных вычислений.

// Синтаксис
// new Promise(executor);
// new Promise(function(resolve, reject) { ... });

// Promise может находиться в трёх состояниях:
//
//     ожидание (pending): начальное состояние, не исполнен и не отклонён.
//     исполнено (fulfilled): операция завершена успешно.
//     отклонено (rejected): операция завершена с ошибкой.



let data = fetch('https://api.vs-dev.info/wp-json/cv/v1/home-page', {
    method: 'GET',
    headers: {
        accept: 'application/json, text/plain, */*',
    }
})

console.log(data)

data
    .then(response => {
        // console.log(response)
        return response.json();
    })
    .catch(response => {
        console.log(response)
        return response
    })
    .finally(r => {
        console.log(r)
    })


//
// console.log(data);




// Promise.all() - ждёт выполнения всех промисов (или первого метода reject()).

// let p1 = Promise.resolve(3);
// let p2 = 1337;
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "foo");
// });
//
// Promise.all([p1, p2, p3]).then(values => {
//     console.log(values);
// });

//Выведет:
// [3, 1337, "foo"]


// Promise.allSettled() - Метод Promise.allSettled() возвращает промис, который
// исполняется когда все полученные промисы завершены (исполнены или отклонены).

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
// then((results) => results.forEach((result) => console.log(result.status)));


// Promise.race(iterable) - Ожидает исполнения или отклонения любого из полученных промисов.
// Promise.reject(reason) - Возвращает промис, отклонённый из-за reason.
// Promise.resolve(value) - Возвращает промис, исполненный с результатом value.