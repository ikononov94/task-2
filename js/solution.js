(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        let islandsCount = 0;
        let arrayToCount = map.map(function func(currentElement) {
           if(Array.isArray(currentElement)) {
               return currentElement.map(func);
           }

           return currentElement;
        });

        for(let height = 0; height < arrayToCount.length; height++) {
            for(let width = 0; width < arrayToCount[height].length; width++) {

                if(isIsland(arrayToCount, height, width)) {
                    islandsCount++;
                }
            }
        }

        function isIsland(arrayToCount, height, width) {
            if(height < 0 || height >= arrayToCount.length) return false;
            if(width < 0 || width >= arrayToCount[0].length) return false;

            let islands = arrayToCount[height][width] == 1;

            arrayToCount[height][width] = 0;

            if(islands) {
                isIsland(arrayToCount, height, width + 1);
                isIsland(arrayToCount, height, width - 1);
                isIsland(arrayToCount, height + 1, width);
                isIsland(arrayToCount, height - 1, width);
            }

            return islands;
        }

        return islandsCount;

    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
