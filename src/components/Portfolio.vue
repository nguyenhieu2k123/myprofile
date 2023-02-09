

<template>
    <div class="container-fluid h-screen p-12">
        <div class="flex">
            <div class="introduce-inf">
                Portature
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            name: 'Portfilio'
        }
    }
})
</script>

<style>
.bg-avt {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 5px;
}

.bg-avt img {
    border-radius: 50%;
    max-width: 500px;
}

.hello-text {
    text-transform: uppercase;
}

.my-name {
    letter-spacing: .8rem;
    line-height: 62px !important;
}

.my-name span {
    font-weight: 700;
}

.red {
    color: #ff014f;
}
</style>