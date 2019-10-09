export default (err) => {
    const error = (data, error) => ({
        status: false, error: data || error
    });
    const response = err.response || undefined;
    // console.log(err)
    if(err.message === "Network Error"){
        return error("Нет доступа связи к серверу данных!");
    }else if(response){
        switch(response.status){
            case 400:
                return error(response.data.error, "Плохой, неверный запрос!");
            case 401:
                return error(response.data.error, "Вы не прошли аутентификацию.");
            case 403: 
                return error(response.data.error, "У Вас отсутствуют права доступа к этому ресурсу!");
            case 404:
                return error(response.data.error, "Ресурс не найден!");
            case 500:
                return error(response.data.error, "Внутренняя ошибка сервера!");
        }
    }else {
        return error("Ошибка");
    }
}