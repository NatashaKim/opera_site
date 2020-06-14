let path = anime.path('#onegin_path')
let onegin_path = anime({
  targets: '.onegin_circle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true
})

let path2 = anime.path('#onegin_path_2')
let onegin_path_2 = anime({
  targets: '.onegin_circle_2',
  translateX: path2('x'),
  translateY: path2('y'),
  rotate: path2('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true
})

let path3 = anime.path('#don_juan_path')
let don_juan_path = anime({
  targets: '.don_juan_circle',
  translateX: path2('x'),
  translateY: path2('y'),
  rotate: path2('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true
})

let path4 = anime.path('#don_juan_path')
let don_juan_path_2 = anime({
  targets: '.don_juan_circle_2',
  translateX: path2('x'),
  translateY: path2('y'),
  rotate: path2('angle'),
  easing: 'linear',
  duration: 8000,
  delay: 5000,
  loop: true
})

let path5 = anime.path('#don_juan_path')
let don_juan_path_3 = anime({
  targets: '.don_juan_circle_3',
  translateX: path2('x'),
  translateY: path2('y'),
  rotate: path2('angle'),
  easing: 'linear',
  duration: 8000,
  delay: 10000,
  loop: true
})

let path6 = anime.path('#magic_flute_path')
let magic_flute_path = anime({
  targets: '.magic_flute_circle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 21000,
  autoplay: true,
  loop: true
})

let animAtom = anime({
    targets: '.atom_rotate',
    easing: 'linear',
    rotate: 360,
    duration: 10000,
    autoplay: false
  })
let atomClick = document.getElementById('atom_rotate')
atomClick.onclick = animAtom.play

  let animAtom_2 = anime({
      targets: '.atom_rotate_2',
      easing: 'linear',
      rotate: 360,
      duration: 10000,
      autoplay: false
    })
  let atomClick_2 = document.getElementById('atom_rotate_2')
  atomClick_2.onclick = animAtom_2.play
