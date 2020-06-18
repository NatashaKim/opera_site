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
  translateX: path3('x'),
  translateY: path3('y'),
  rotate: path3('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true
})

let path4 = anime.path('#don_juan_path_2')
let don_juan_path_2 = anime({
  targets: '.don_juan_circle_2',
  translateX: path4('x'),
  translateY: path4('y'),
  rotate: path4('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true
})

let path5 = anime.path('#don_juan_path_3')
let don_juan_path_3 = anime({
  targets: '.don_juan_circle_3',
  translateX: path5('x'),
  translateY: path5('y'),
  rotate: path5('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true
})

let path6 = anime.path('#magic_flute_path')
let magic_flute_path = anime({
  targets: '.magic_flute_circle',
  translateX: path6('x'),
  translateY: path6('y'),
  rotate: path6('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let path7 = anime.path('#magic_flute_path_2')
let magic_flute_path_2 = anime({
  targets: '.magic_flute_circle_2',
  translateX: path7('x'),
  translateY: path7('y'),
  rotate: path7('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let path8 = anime.path('#magic_flute_path_3')
let magic_flute_path_3 = anime({
  targets: '.magic_flute_circle_3',
  translateX: path8('x'),
  translateY: path8('y'),
  rotate: path8('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let path9 = anime.path('#figaro_path')
let figaro_path = anime({
  targets: '.figaro_circle',
  translateX: path9('x'),
  translateY: path9('y'),
  rotate: path9('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let path10 = anime.path('#figaro_path_2')
let figaro_path_2 = anime({
  targets: '.figaro_circle_2',
  translateX: path10('x'),
  translateY: path10('y'),
  rotate: path10('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let path11 = anime.path('#figaro_path_3')
let figaro_path_3 = anime({
  targets: '.figaro_circle_3',
  translateX: path11('x'),
  translateY: path11('y'),
  rotate: path11('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let path12 = anime.path('#figaro_path_4')
let figaro_path_4 = anime({
  targets: '.figaro_circle_4',
  translateX: path12('x'),
  translateY: path12('y'),
  rotate: path12('angle'),
  easing: 'linear',
  duration: 10000,
  autoplay: true,
  loop: true
})

let animAtom = anime({
    targets: '.atom_rotate',
    easing: 'linear',
    rotate: 720,
    duration: 17000,
    autoplay: false
  })
let atomClick = document.getElementById('atom_rotate')
atomClick.onclick = animAtom.play

  let animAtom_2 = anime({
      targets: '.atom_rotate_2',
      easing: 'linear',
      rotate: 720,
      duration: 17000,
      autoplay: false
    })
  let atomClick_2 = document.getElementById('atom_rotate_2')
  atomClick_2.onclick = animAtom_2.play

  let main_pic_2 = anime({
  targets: '.main_pic_2',
  duration: 2000,
  opacity: [0],
  easing: 'linear',
  autoplay: true,
  loop: true,
  direction: 'alternate'
})

let left_circle = anime({
targets: '.left_circle',
duration: 2000,
scale: 1.5,
easing: 'linear',
autoplay: true,
loop: true,
direction: 'alternate'
})

let left_circle_2 = anime({
targets: '.left_circle_2',
duration: 1500,
scale: 1.4,
easing: 'linear',
autoplay: true,
loop: true,
direction: 'alternate'
})

let right_circle = anime({
targets: '.right_circle',
duration: 2000,
scale: 1.2,
easing: 'linear',
autoplay: true,
loop: true,
direction: 'alternate'
})

let right_circle_2 = anime({
targets: '.right_circle_2',
duration: 1500,
scale: 1.1,
easing: 'linear',
autoplay: true,
loop: true,
direction: 'alternate'
})
