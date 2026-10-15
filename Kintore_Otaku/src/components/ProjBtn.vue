<!-- Script -->

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true
    },
    href: {
        type: String,
        default: '#'
    }
});


const btnDisplay = computed(() => {
    const obj = {
        className: 'proj-btn',
        icon: ''
    };
    switch (props.type) {
        case 'booking':
            obj.text = '立即預約'
            obj.className = 'proj-btn btn-booking'
            obj.icon = ''
            break;

        case 'search':
            obj.text = '搜尋'
            obj.className = 'proj-btn btn-search'
            obj.icon = 'bi bi-search'
            break;

        case 'add':
            obj.text = '新增'
            obj.className = 'proj-btn btn-add'
            obj.icon = 'bi bi-plus-lg'
            break;

        default:
            obj.text = '未定義'
            obj.className = 'proj-btn'
            obj.icon = ''
            break;
    }
    return obj;
});

const emit = defineEmits(['click']);

function clickHandle() {
    emit('click');
}
</script>

<!-- Template -->

<template>
    <a v-if="props.type === 'booking'" :href="href" :class="btnDisplay.className">
        {{ btnDisplay.text }}
        <span aria-hidden="true">→</span>
    </a>

    <button v-else type="button" :class="btnDisplay.className" @click="clickHandle">
        <i v-if="btnDisplay.icon" :class="btnDisplay.icon"></i>
        {{ btnDisplay.text }}
    </button>
</template>

<!-- Style -->
<style scoped>
/* 共用按鈕外觀 */
.proj-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #ff4d1a;
    color: #1a1a1a;
    border: 4px solid #1a1a1a;
    box-shadow: 6px 6px 0 #1a1a1a;
    padding: 15px 30px;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 0.06em;
    text-decoration: none;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
}

/* 功能配色 */
.btn-booking {
    background: #ff4d1a;
}

.btn-search {
    background: #0d6efd;
}

.btn-add {
    background: #198754;
}

.btn-default {
    background: #6c757d;
}

/* Hover 效果 */
.proj-btn:hover {
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 #1a1a1a;
}

/* 手機版 */
@media (max-width: 575.98px) {
    .proj-btn {
        gap: 6px;
        padding: 10px 16px;
        font-size: 16px;
        border-width: 3px;
        box-shadow: 4px 4px 0 #1a1a1a;
    }

    .proj-btn:hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 #1a1a1a;
    }
}
</style>