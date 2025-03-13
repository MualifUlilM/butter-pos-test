export function nextTab(route, router) {
  if (route.hash === '' || route.hash == '#pendahuluan') {
    router.push('#pasal_1')
  }
  if (route.hash == '#pasal_1') {
    router.push('#pasal_2')
  }
  if (route.hash == '#pasal_2') {
    router.push('#pasal_3')
  }
  if (route.hash == '#pasal_3') {
    router.push('#pasal_4')
  }
  if (route.hash == '#pasal_4') {
    router.push('#pasal_5')
  }
  if (route.hash == '#pasal_5') {
    router.push('#pasal_6')
  }
  if (route.hash == '#pasal_6') {
    router.push('#pasal_7')
  }
  if (route.hash == '#pasal_7') {
    router.push('#form_persetujuan')
  }
}
