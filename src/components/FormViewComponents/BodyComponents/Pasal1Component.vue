<template>
  <section
    id="pasal_1"
    class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg"
  >
    <div class="text-lg md:text-xl font-bold">{{ $t('message.pasal') }} 1</div>
    <div class="text-base md:text-lg font-semibold">{{ $t('message.pasal1_1') }}</div>
    <ol class="list-decimal list-outside pl-5">
      <li>
        {{ $t('message.pasal1_2') }}
      </li>
      <li>{{ $t('message.pasal1_3') }}</li>
    </ol>
  </section>
</template>
