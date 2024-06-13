<template>
    <div class="w-full min-h-screen flex items-center justify-center bg-red-200">
        <!-- <p class="title">asdasd</p> -->
        <div class="w-[400px] h-[400px] bg-white relative">
            <div class="w-[280px] h-[400px] bg-green-600">
            </div>
            <div
                class="w-[200px] h-[calc(100%-40px)] bg-green-600 absolute top-5 right-5 rounded-3xl border-8 border-white p-3">
                <div class="w-full flex flex-col text-center">
                    <h3>Sendy Susanto</h3>
                    <span>1st month medal</span>
                </div>
                <div class="w-full bg-lime- flex mt-2">
                    <ul class="w-full border-b-[1.5px] border-white">
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>4</span>
                        </li>
                        <li class="relative">
                            <span>4</span>
                            <span>4</span>
                        </li>
                    </ul>
                </div>
                <div class="vertical-line">
                </div>
                <div class="w-full flex justify-between items-center px-2 text-center mt-1">
                    <div class="flex flex-col">
                        <span>Front</span>
                        <span>38</span>
                    </div>
                    <div class="flex flex-col">
                        <span>back</span>
                        <span>38</span>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-6 left-32">
                <div class="main-score relative">
                    <div class="w-[100px]">
                        <h1 class="text-7xl text-white">74</h1>
                    </div>

                    <h1 class="text-xl text-white absolute -top-4 right-4">+2</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
p.title {
    font-family: Rubik Moonrocks, sans-serif;
    font-size: 200px;
    line-height: 200px;
    color: red;
}

li {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.vertical-line {
    width: 1px;
    height: 70%;
    background-color: white;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
}
</style>