<template>
  <section
    id="pasal_2"
    class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg"
  >
    <div class="text-lg md:text-xl font-bold">{{ $t('message.pasal') }} 2</div>
    <div class="text-base md:text-lg font-semibold">{{ $t('message.pasal2_1') }}</div>
    <ol class="list-decimal list-outside pl-5">
      <li>
        {{ $t('message.pasal2_2') }}
      </li>
      <li>{{ $t('message.pasal2_3') }}</li>
      <li>{{ $t('message.pasal2_4') }}</li>
    </ol>
  </section>
</template>
