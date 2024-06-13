<template>
    <div class="w-full min-h-screen flex items-center justify-center bg-red-200">
        <!-- <p class="title">asdasd</p> -->
        <div class="w-[400px] h-[400px] bg-white relative">
            <div class="w-[280px] h-[400px] bg-green-600">
            </div>
            <div
                class="w-[200px] h-[calc(100%-40px)] bg-green-600 absolute top-5 right-5 rounded-3xl border-8 border-white p-3 pt-1">
                <div class="w-full flex flex-col text-center">
                    <h3 class="font-oswald font-semibold italic text-white text-xl">Sendy Susanto</h3>
                    <span class="text-sm font-edosz">1st monthly medal</span>
                </div>
                <div class="w-full bg-lime- flex mt-2 font-edosz text-2xl">
                    <ul class="w-full border-b-[1.5px] border-white leading-none text-white">
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
                        <li class="mb-2">
                            <span>4</span>
                            <span>4</span>
                        </li>
                    </ul>
                </div>
                <div class="vertical-line">
                </div>
                <div class="w-full flex justify-center gap-6 items-center px-4 text-center mt-1 font-edosz text-white">
                    <div class="flex flex-col leading-none gap-0">
                        <span class="text-xs text-neutral-800">Front</span>
                        <span class="text-yellow-500 text-3xl -translate-y-1">38</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs text-neutral-800">back</span>
                        <span class="text-yellow-500 text-3xl -translate-y-1">38</span>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-6 left-32">
                <div class="main-score relative">
                    <div class="w-[100px]">
                        <h1 class="font-rubik text-7xl text-white">74</h1>
                    </div>

                    <h1 class="font-edosz text-3xl text-yellow-400 absolute -top-4 right-3">+2</h1>
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
    justify-content: center;
    padding: 0 20px;
    gap: 40px;
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