import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
const products = [
  {
    name: "Aplikasi Toko",
    id: "aplikasi-toko",
    description:
      "Aplikasi toko, program toko,software toko untuk menunjang usaha dan bisnis toko shop store outlet hingga minimarket supermarket dalam penggunaan nya , pilih aplikasi toko dibawah ini.",
    resources: [
      {
        name: "POS X Web App",
        id: "pos-x",
        description:
          "Solusi web app terlengkap dengan pos-x ,  dilengkapi dengan fitur lengkap user account, customer, supplier , member card, grup produk, produk based dengan gambar foto produk dan support dengan barcode system , service jasa , transaksi pembelian, in out kas ./ cash flow , penjualan kasir dengan mode touchscreen gambar dan support barcode dalam pos penjualan , pending transaksi kasir , laporan stok, laporan detail penjualan, laporan omset income dan berbagai laporan lain nya siap untuk diakses, Spek : domain.com + cloud host + aplikasi pos-x + website",
        img:
          "https://1.bp.blogspot.com/-H42dYAX8K7o/XzpTSWl9kZI/AAAAAAAALG0/q201upeuQq00VNG_M2gDIRPVswz26Sg7wCLcBGAsYHQ/s910/aplikasi%2Btoko%2Bonline%2Bweb%2Bapp.jpg",
        price: "Rp.1.565.200/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/POS-X%20web%20apps.pdf",
        url: "https://www.youtube.com/watch?v=IuifeUDo3RU&t=35s"
      },
      {
        name: "Lava App",
        id: "lava",
        description:
          "Web app modern dengan dark mode modern dan dengan kemampuan penjualan grosir dan eceran secara langsung, menyempurnakan penjualan kasir anda, dan dengan laporan detail yang lengkap ,plus fitur master data , pembelian ,penjualan ,barcode ready , stok inventori, laporan income pendapatan dan website usaha all in one siap digunakan, spesifikasi : domain .com + cloud host + aplikasi lava apps + website usaha",
        img:
          "https://1.bp.blogspot.com/-kG2JnPxeWuY/X0ZarR4Ja2I/AAAAAAAALVQ/v_rPlhPkVuQxcG5kBIPx6Ge7fd1VQHW-QCLcBGAsYHQ/s1400/aplikasi%2Bkasir%2Btoko%2Bpenjualan%2Bretail%2Bgorsir%2Bplus%2Bwebsite%2B%25281%2529.jpg",
        price: "Rp.1.561.200/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/lavaapp.pdf",
        url:
          "https://www.youtube.com/playlist?list=PLQDm6k9_HvYNKAtii4V59F27419PTpTbd"
      },
      {
        name: "MultiPos Apps",
        id: "multi-pos",
        description:
          "Aplikasi toko multi cabang dengan fitur : admin office server - add user admin cabang , mendaftarkan cabang , cek laporan detail per cabang dan global baik stok dan income, fitur cabang : login akses cabang, melakukan penjualan kasir, in stok inventori, master data produk dan lain lain.spek : domain my.id + cloud host + 1 server admin + 2 cabang kuota.",
        img:
          "https://1.bp.blogspot.com/-j8WmJM62M9Y/XzpTTUE9FlI/AAAAAAAALHI/gLAjPK6hArU1DANlSwcmrpODereITc73ACLcBGAsYHQ/s400/multicabang.png",
        price: "Rp.1.561.200/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/MULTIPOS%20OUTLET.pdf",
        url: "https://www.youtube.com/watch?v=mFSFJ4BgHiY"
      },
      {
        name: "DX Retail",
        id: "dx-retail-app",
        description:
          " fitur user account untuk regristasi divisi kasir, dan gudang admin database, supplier , product support dengan kode barcode , stok awal , pembelian , penjualan kasir point of sale support barcode system , stok opname out stok , laporan pembelian , laporan penjualan, laporan inventori stok history , laporan produk detail , out lose stok report, dan grafik grafik kinerja toko dan usaha. spek : domain com + cloud host + dx retail apps + website",
        img:
          "https://1.bp.blogspot.com/-PHloQ16bX7w/XzpTTIH13kI/AAAAAAAALHE/eRBYNXzb-IEliszosWJYGzR7ymOjJdeRQCLcBGAsYHQ/s510/dexoposretailapps.jpg",
        price: "Rp.1.561.200/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/DX-Retail.pdf",
        url: "https://www.youtube.com/watch?v=JGTQ1dxnJEo&t=5s"
      },
      {
        name: "Dexopos Shop",
        id: "dx-shop-app",
        description:
          "fitur terbaik dengan user account , staff petugas kasir pramuniaga , kategori grup produk , produk dengan fitur upload gambar untuk display penjualan kasir, POS point of sale penjualan kasir dengan fitur gambar foto produk yang keren dan modern , pembayaran pelanggan dengan multi payment, dan print kasir pos penjualan, laporan penjualan income profit detail berdasarkan periode , harian , mingguan , bulanan dan customise. Spek : dexopos shop apps + domain my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/--t9O8VxLs5M/XzpTRj6GEEI/AAAAAAAALGk/PEqajmFQqQ4B8y7oZXrl22ZWdCSXqLoEACLcBGAsYHQ/s675/aplikasi%2Bkasir%2Btoko%2Bpenjualan%2Bonline%2Bterbaru%2Bkeren%2Bwp.jpg",
        price: "Rp.568.400/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/dexopos%20shop.pdf",
        url: "https://youtu.be/kjDh1BhSvz0"
      },
      {
        name: "Axcorapos",
        id: "axcorapos",
        description:
          "Fitur : supplier , produk dengan barcode dan dukungan expired date fitur, pembelian ke supplier include expire date produk , penjualan kasir point of sale, cetak struk kasir penjualan , hapus data , laporan stok detail, jumlah stok , stok expired , modal awal , target profit , out produk , price list , laporan keuangan , income profit pendapatan detail laba rugi , laporan penjualan , laporan pembelian, target actual profit report , profit report detail , backoffice dashboard admin dengan kalkulator,agenda dan lain nya. Spek : axcorapos web app + domain my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/-WedF6l3lT0c/XzpTRxxrJPI/AAAAAAAALGo/exC2ZmmJ9qw_FltyhpRRnTv2uAa1PcGyQCLcBGAsYHQ/s400/aplikasi%2Bkasir%2Btoko%2Bonline.png",
        price: "Rp.568.400/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/AXCORAPOS.pdf",
        url:
          "https://www.youtube.com/playlist?list=PLQDm6k9_HvYNprzMbZ2nCPMNw2L4iZXiu"
      },
      {
        name: "Boosterpos",
        id: "bootserpos",
        description:
          "fitur master data produk dengan grup produk, kategori produk, produk jual, stok inventori management system, pos point of sale penjualan kasir , pembayaran transaksi kasir dengan pilihan cash, online payment dan lain nya, hingga kebutuhan status pembayaran via cash lunas, credit cicilan ataupun termint system, cek stok dan pricelist produk, cek transaksi detail laporan, cek laporan pembayaran cash , credit dan cicilan hingga sisa credit , termint tempo ,cek profit income detail berdasarkan periode sesuai kebutuhan harian,mingguan,bulanan dan customise, list detail penjualan kasir, setting konfigurasi web app, dan manual tutorial web app . Spek : Boosterpos apps + cloud hosting + domain my.id",
        img:
          "https://1.bp.blogspot.com/-76lk4OREPt8/XzpTSqhsnuI/AAAAAAAALG4/S61TLej2iksgyw27nl7ULO-bBp9H3qJKgCLcBGAsYHQ/s400/aplikasi%2Btoko%2Bonline.png",
        price: "Rp.368.800/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/Boosterpos%20Retail%20Shop.pdf",
        url: "https://www.youtube.com/watch?v=8r7og7aFuWA"
      },
      {
        name: "Larapos",
        id: "larapos",
        description:
          "Fitur : user account , unit satuan produk , product data dengan harga khusus retail dan grosir, point of sale penjualan kasir dengan fitur penjualan via panel grosir atau retail sesuai kebutuhan bertransaksi , price list prouct report untuk cek harga grosir maupun eceran , list penjualan kasir , profit income report berdasarkan periode sesuai kebutuhan anda, backup restore database , cek status history login web app,log out. Spek : larapos apps + domain my.id + cloud hosting",
        img:
          "https://1.bp.blogspot.com/-SAlwY3BG5L4/XzpRrkzuQXI/AAAAAAAALGc/wEDCCtG_6KskDbxH4qvQpeeXlVoNPoduQCLcBGAsYHQ/s600/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg",
        price: "Rp.568.400/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/larapos.pdf",
        url: "https://www.youtube.com/watch?v=hlGd7yk4nko"
      },
      {
        name: "Vpos Apps",
        id: "vpos",
        description:
          "Aplikasi toko dan website toko all in one via VPOS web apps, free nama domain toko anda dengan fitur : user account , grup produk , unit satuan produk, inventori stok management transaksi in out stok ,POS point of sale penjualan kasir dengan barcode system, backoffice admin untuk cek income pendapatan dan laporan laporan detail, dab fitur lain nya . Spek : vpos web app + domain my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/-iF8S0hItPDI/XzpUQAYb59I/AAAAAAAALH0/oMCiggd5YroPsqtU3poR1n9ds8Efj4mNgCLcBGAsYHQ/s512/mesin%2Bkasir%2Bonline%2Bnew%2Bvpos%2Bweb%2Bapp.jpg",
        price: "Rp.568.400/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/vpos%20web%20apps.pdf",
        url: "https://www.youtube.com/watch?v=uZBBgEHw12M&t=13s"
      }
    ]
  },
  {
    name: "Aplikasi Restoran",
    id: "aplikasi-restoran",
    description:
      "Aplikasi restoran rumah makan cafe , software dan program untuk usaha kuliner , lengkap dan mudah digunakan dalam menunjang bisnis kuliner,pilih app dibawah ini",
    resources: [
      {
        name: "Resto X Web App",
        id: "resto-x",
        description:
          "fitur transaksi cepat, hold transaksi dengan pencatatan meja, list bill dengan alert hingga pembukuan detail mengenai keuangan dan laba rugi terangkum secara detail via aplikasi restoran online modern ini, memudahkan dalam digunakan dimana saja dan kapan saja secara real time online, dukungan multi device semakin nyaman untuk akses via android iphone hingga pc desktop laptop dan mesin kasir restoran anda dengan resto-x web app ini, saat nya update dan upgrade aplikasi software restoran program restoran anda bersama resto-x web application. Spek : resto-x web app + domain .com + cloud hosting + cms website get axcora restoran",
        img:
          "https://1.bp.blogspot.com/-lnCfAUuYoPo/XzpXYT6SCCI/AAAAAAAALII/FXg4J7ar-askTsjcS5wHnnJQYr3wsH88ACLcBGAsYHQ/s550/aplikasi%2Brestoran%2Bonline%2Bweb%2Bapp.jpg",
        price: "Rp.1.561.200/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/RESTO-X.pdf",
        url: "https://www.youtube.com/watch?v=0CyXOmIAcJc&t=44s"
      },
      {
        name: "Dexopos",
        id: "dexopos resto",
        description:
          "Modern applikasi develope dengan menggunakan laravel php artisan include dengan vue js semakin menyempurnakan dalam bekerja, dengan modern UI desain dark mode semakin menarik untuk digunakan dalam bertransaksi , dukungan pencatatan meja dan mobile waiters memudahkan segala urusan dengan menggunakan nya, dexopos resto apps adalah solusi modern resto dengan compleks system dalam menunjang kebutuhan usaha kuliner rumah makan cafe warung , dengan fitur penjualan bergambar semakin menarik menggunakan dexopos resto dalam bekerja, spek : dexopos resto apps + domain .my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/-14vAoWoYfl4/Xsa9VFZzdCI/AAAAAAAAJgU/VlpKNFGc9Vk74b379AzXsPAyPZGFeNxqACK4BGAsYHg/resto%2Bpos%2Bweb%2Bapp%2B-%2BCopy.jpg",
        price: "Rp.568.400/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/dexoposrestoapps.pdf",
        url: "https://www.youtube.com/watch?v=KU8RLi0m8g0"
      },
      {
        name: "Boosterpos",
        id: "boosterposresto",
        description:
          "fitur : pencatatan meja, bill pelanggan , melakukan pembayaran bill dan transaksi kasir, penjualan dengan pencatatan jenis transaksi cash payment hingga online system dan berbagai kebutuhan kebutuhan lain , include laporan penjualan untuk cek omset memudahkan dalam monitoring kinerja usaha kuliner anda, saat nya menggunakan boosterpos resto apps include dengan gratis website informasi restoran dan domain name restoran anda semakin powerfull dalam all in one web app technology ini, spek : boosterpos apps + domain my.id + cloud hosting.",
        img:
          "https://1.bp.blogspot.com/-0UIxFFYSJhQ/XzpYa98F6CI/AAAAAAAALJA/iga-EPZTnU0L5a1C62U3MnH4Xcq8aPj4wCLcBGAsYHQ/s1366/mesin%2Bsoftware%2Bkasir%2Brestoran%2Bcafe%2Bonline1.jpg",
        price: "Rp.368.800/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/Boosterpos%20Resto%20App.pdf",
        url: "https://www.youtube.com/watch?v=0EdgygTprSA"
      },
      {
        name: "Sip Resto",
        id: "sip-resto",
        description:
          "Sip resto dengan full web app online memudahkan waiters untuk bekerja menggunakan smartphone nya, dan selanjutnya kasir dapat dengan cepat melakukan transaksi via mesin kasir restoran berdasarkan pencatatan meja pelanggan , dengan system ini transaksi kasir restoran akan semakin cepat dan tentu laporan list penjualan memudahkan monitoring dalam cek penjualan restoran warung dan kuliner anda, include bonus website dan domain restoran cafe rumah makan warung anda semakin sempurna untuk full web app technology digunakan, spek : sip resto web app + domain my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/-Fr0oYds1IF4/XzpXYw1qovI/AAAAAAAALIU/slCiVw8dGmgCxIVPkSZRCGNLdHavpGjhwCLcBGAsYHQ/s1349/apprestaurantonline-sipresto.png",
        price: "Rp.368.800/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/Sip%20resto%20apps.pdf",
        url: "https://www.youtube.com/watch?v=3vM0U8wLu3Y"
      },
      {
        name: "Fun Resto",
        id: "fun-resto",
        description:
          "Fitur staff , account user , table untuk mendaftarkan meja , menu makanan dan minuman dengan 6 grup menu memudahkan untuk pengelompokan menu makanan dan minuman , POS penjualan kasir dengan display menu yang unik dan menarik , print struk kasir dan bill, system pembayaran , laporan list penjualan kasir. spek fun resto app + domain my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/-Uk7hiVOAaTc/XzpXaF1mKZI/AAAAAAAALIo/cuxgtykzO3Ahfmi22jL7mXgaa78qzpcTwCLcBGAsYHQ/s1000/restaurant%2Bapp%2Bcheap%2Bprice.jpg",
        price: "Rp.368.800/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/funrestoapp.pdf",
        url: "https://youtu.be/hiVT-MZmUwk"
      },
      {
        name: "Z Resto",
        id: "z-resto",
        description:
          "fitur : user database , menu makanan dan minuman dengan enam grup menu , pos penjualan kasir dengan menu makanan dan minuman bergambar, laporan detail list penjualan. spek : z-resto web app + domain my.id + cloud host",
        img:
          "https://1.bp.blogspot.com/-CkAJwZriihs/XzpXY0Vn8_I/AAAAAAAALIY/Nrg6sii3JuEDRswksDsORFrdCTI9cceTwCLcBGAsYHQ/s817/mesin%2Bkasir%2Brestoran%2Bonline%2Bz-resto%2Bweb%2Bapp.jpg",
        price: "Rp.368.800/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/Z-Resto.pdf",
        url: "https://www.youtube.com/watch?v=CTiEkkZc6mU"
      }
    ]
  },
  {
    name: "Aplikasi Sekolah",
    id: "aplikasi-sekolah",
    description:
      "Aplikasi Sekolah e-learning dan kebutuhan untuk edukasi proses belajar mengajar",
    resources: [
      {
        name: "Axcora school",
        id: "axcora-school",
        description:
          "Database : Admin dengan kuasa penuh untuk melakukan regristasi hingga setting konfigurasi kebutuhan sekolah meliputi, database untuk regristasi kelas,ruang sekolah, bidang divisi staff dan guru , guru pengajar , tata usaha, orang tua wali , siswa, dan register pendaftaran siswa baru PPDB. E-learn fungsi dan tugas elarn include guru pengajar apps login : pendaftaran kurikulum ajaran , tugas dan ujian soal pertanyaan folder bank , upload materi file soal tugas , kalusul level penilaian tugas dan ujian , hasil ujian dan tugas siswa , jadwal mata pelajaran , absensi siswa. Keuangan include divisi finance keuangan dan tata usaha apps meliputi pembuatan akun pembayaran sekolah, memasukan biaya kebutuhan untuk akun pembayaran , menerbitkan invoice pembayaran baik invoice tunggal maupun kolektif keseluruhan , laporan income keuangan sekolah . Setting dan update : membuat agenda berita dan pengumuman via kalender otomatis untuk notifikasi ke masing masing login apps guru dan murid siswa , kelulusan dan migrasi kenaikan kelas dari kelas sebelumnya, serta website info untuk shortcut ke halaman admin panel website sekolah dalam kebutuhan update informasi dan berita pada website sekolah. Siswa apps : homepage dashboard , jadwal mata pelajaran , list tugas dan ujian , download soal materi dari guru pengajar, hasil nilai dari tugas dan ujian, absensi list report , kalender agenda sekolah update dengan notif untuk pengumuman dan lain sebagai nya, status pembayaran siswa , website shortcut untuk akses website sekolah, dan log out keluar dari aplikasi. All in one terintegrasi dalam axcora school apps untuk kebutuhan komplit sekolah. ",
        img:
          "https://1.bp.blogspot.com/-AhQy_BLwg50/X-Ap6AILi-I/AAAAAAAAL44/XtT2qIeHzbwuoY8B1xTph-NR9WjdeONoACLcBGAsYHQ/s1366/aplikasi-sekolah-online-e-learn-website-sekolah-5.png",
        price: "Rp.5.812.600 / Tahun.",
        download: "https://mesinkasir.github.io/e-catalog/axcorashcoolerp.pdf",
        url:
          "https://www.youtube.com/playlist?list=PLQDm6k9_HvYPvK5GDjK4BJNaxShM3lHR8"
      },
      {
        name: "Nilai & Rapot",
        id: "nilai-rapot",
        description:
          "Fitur e-learn media : Guru admin apps : homepage dashboard area guru dan admin, pendaftaran kelas sekolah, kurikulum , pelajaran per kelas ,data siswa , nilai untuk memberikan nilai rapot secara detail include dengan pilihan kelas pilihan siswa dan pelajaran nya, nantinya admin web akan memasukan nilai sesuai dengan nilai pelajaran rapot yang didapat oleh siswa. Siswa apps : login ke area siswa dan akan langsung masuk pada panel untuk memilih kelas serta memasukan password, setelah siswa memasukan password maka nilai rapot online akan tampil, siswa dapat melakukan print rapot jika dibutuhkan, spek : Rapot online Apps , Free Domain .sch.id , Web Space 1.5GB , Include Host , axcora school cms , website sekolah , APK Android Guru , APK Android Siswa",
        img:
          "https://1.bp.blogspot.com/-GnkN8kZ5eiU/X-Ap6RVj6MI/AAAAAAAAL48/MmR-2n_utMoBzsZfE3kdugsfDZ-56oeggCLcBGAsYHQ/s1200/aplikasi-rapot-siswa-online.jpg",
        price: "Rp.2.512.300/Tahun ",
        download:
          "https://mesinkasir.github.io/e-catalog/Aplikasisekolahlist.pdf",
        url: "https://www.youtube.com/watch?v=tq4DuRHo8zY"
      },
      {
        name: "Pembayaran & Keuangan",
        id: "pembayaran-keuangan",
        description:
          "Fitur e-learn media : Master database untuk memasukan data akun kebutuhan akan pembayaran siswa di sekolah , daftar siswa untuk master data dalam pendataan siswa yang memudahkan nanti pada saat melakukan pembayaran keuangan , invoice fitur untuk menerbitkan tagihan pembayaran terkait keuangan sekolah , pembayaran menu untuk melakukan dan mencatat pembayaran siswa dan kebutuhan untuk sekolah , laporan untuk cek jumlah uang yang masuk di sekolah via pencatatan pembayaran. spek : Payment Apps , Free Domain .sch.id , Web Space 1.5GB , Include Host , axcora school cms , website sekolah , APK Android Guru , APK Android Siswa",
        img:
          "https://1.bp.blogspot.com/-zFOEf0owiRM/X-Ap5JaizXI/AAAAAAAAL4w/Ha9KB9jC3dMZp8ZCpZRDgIivtFTtTh4kwCLcBGAsYHQ/s860/aplikasi-pembayaran-sekolah-online-brochure.jpg",
        price: "Rp.2.512.300/Tahun ",
        download:
          "https://mesinkasir.github.io/e-catalog/Aplikasisekolahlist.pdf",
        url: "https://www.youtube.com/watch?v=MPSbEsWbIbc"
      },
      {
        name: "Absensi Kesiswaan",
        id: "absensi-kersiswaan",
        description:
          "Aplikasi untuk kebutuhan pencatatan absensi sekolah dengan menggunakan applikasi ini memudahkan dalam cek dan monitoring kinerja absensi siswa , include laporan absensi memudahkan dalam setiap kebutuhan untuk cek absensi siswa, ini adalah plugin untuk tambahan bagi paket website sekolah. gratis dalam setiap paket pembuatan website sekolah sesuai dengan package set.",
        img:
          "https://1.bp.blogspot.com/-U7UOWZs-xJU/X-Ap3xPh6jI/AAAAAAAAL4o/4f4JMLoP6fUZ87-jv3vF_mTPuzVCst-oQCLcBGAsYHQ/s2048/aplikasi-absensi-online-siswa-sekolah.jpg",
        price: "FRee Plugin website sekolah",
        download:
          "https://mesinkasir.github.io/e-catalog/Aplikasisekolahlist.pdf",
        url: "https://www.youtube.com/watch?v=T8Xzb6VnWNE"
      },
      {
        name: "E-Learn Pro",
        id: "elearn-pro",
        description:
          "Fitur yang tersedia : Guru admin apps : home page, data kelas, data siswa , data ujian untuk memasukan soal ujian dilengkapi dengan pertanyaan dan pilihan jawaban untuk memudahkan siswa dalam menjawab soal pertanyaan ujian ulangan dan lain nya, hasil ujian konvert otomatis ketika siswa sudah melaksanakan dan menjawab hasil ujian nya, laporan ujian untuk cek laporan laporan ujian perkelas dan persiswa , pesan chat untuk menerima pesan dari siswa untuk kebutuhan interaksi dengan guru pengajar. Siswa apps : Home page, chat pesan dengan guru pengajar, informasi tugas dan ujian soal , hasil ujian baik yang sudah dikerjakan dan belum dikerjakan, menjawab soal pertanyaan ujian real time dengan durasi waktu yang diberikan oleh guru pengajar, submit jawaban untuk menyelesaikan tugas, dan konvert hasil nilai otomatis setiap ujian soal dan tugas yang dikerjakan. spek : E-learn Premium Apps Free Domain .sch.id , Web Space 1.5GB , Include Host , axcora school cms , 1 web admin cms , APK Android Guru , APK Android Siswa ",
        img:
          "https://1.bp.blogspot.com/-7t_1tTVz5f4/X-Ap3esy11I/AAAAAAAAL4g/AbBFWPEQJpcjZYgbPlbNW1xTusvdWczZgCLcBGAsYHQ/s1200/aplikasi-belajar-online-sekolah-e-learning.jpg",
        price: "Rp.2.712.300/Tahun ",
        download:
          "https://mesinkasir.github.io/e-catalog/Aplikasisekolahlist.pdf",
        url: "https://www.youtube.com/watch?v=_vg23sv_JVQ"
      },
      {
        name: "E-Learn Media",
        id: "elearn-media",
        description:
          "Fitur e-learn media : Guru admin apps : home page, Upload file baik pdf file maupun video untuk kegiatan belajar mengajar online, tugas untuk memberikan tugas latihan soal kepada para peserta didik atau siswa , membuat soal pertanyaan dan disertai dengan pilihan jawaban untuk kemudahkan siswa dalam proses belajar mengajar, selanjutnya hadir fitur daftar siswa untuk cek siswa list, dan user pengguna aplikasi guru apps ini. Siswa apps : Home page, download soal dan file pdf maupun video, menjawab tugas soal pertanyaan latihan dengan pilihan jawaban, dan otomatis hasil penialaian langsung setelah siswa menyelesaikan tugas latihan, dan log out keluar dari aplikasi ini.spek : E-learn Media Apps , Free Domain .sch.id , Web Space 1.5GB , Include Host , axcora school cms , website sekolah , APK Android Guru , APK Android Siswa",
        img:
          "https://1.bp.blogspot.com/-1b7ZRFU949I/X-Ap3ROU0XI/AAAAAAAAL4k/uKnofCmUhpAZ2knCGDNxOUCg9z8lo8XpwCLcBGAsYHQ/s1366/aplikasi-belajar-sekolah-online-2.png",
        price: "Rp.2.512.300/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/Aplikasisekolahlist.pdf",
        url: "https://www.youtube.com/watch?v=mowZcMBPFKY"
      },
      {
        name: "E-Learn simple",
        id: "e-learn-simple",
        description:
          "fitur : Guru admin apps : homepage dashboard area guru dan admin, regristasi mendaftarkan siswa untuk mengikuti ujian atau tugas elearn online , membuat tugas dan ujian disertai dengan materi soal dan optional pilihan jawaban untuk membantu memudahkan siswa untuk belajar, memasukan daftar siswa peserta ujian bisa digunakan untuk remidi siswa, laporan hasil nilai ujian siswa , log out keluar dari aplikasi elearning online sekolah . Siswa apps : homepage dashboard siswa , list ujian dan tugas lengkap dengan status nya baik yang sudah dikerjakan maupun yang belum dikerjakan, memulai proses latihan pelajaran sekolah online , menjawab materi soal dari guru, nilai otomatis setelah siswa menyelesaikan tugas nya, log out keluar dari aplikasi , spek : E-learn simple Apps , Free Domain .sch.id , Web Space 1.5GB , Include Host , axcora school cms , website sekolah , APK Android Guru , APK Android Siswa",
        img:
          "https://1.bp.blogspot.com/-HuUO-yb4RSY/X-Ap4ZdW50I/AAAAAAAAL4s/m38pVoX4Yrs6q3csj4v3Z_a5rIKAHmvpQCLcBGAsYHQ/s1366/aplikasi-elearning-online-simple-belajar-mengajar-sekolah-12.png",
        price: "Rp.2.512.300/Tahun ",
        download:
          "https://mesinkasir.github.io/e-catalog/Aplikasisekolahlist.pdf",
        url: "https://www.youtube.com/watch?v=5478Z4t4Pjw"
      }
    ]
  },
  {
    name: "Aplikasi Office",
    id: "aplikasi-bisnis",
    description:
      "Aplikasi software dan program untuk kebutuhan kantor dan office dengan invoice management, akuntansi accounting , inventori ,sangat lengkap dan simple.",
    resources: [
      {
        name: "The Next Invoice",
        id: "invoice-online",
        description:
          "Aplikasi invoice dengan kelengkapan fitur yang luar biasa dalam digunakan menunjang usaha anda, dengan kemudahan dalam implementasi nya untuk diterapkan dalam pencatatan pembukuan, melakukan penawaran, cek status penawaran, menerbitkan invoice fkatur jual dan faktur pajak penjualan hingga kebutuhan untuk pencatatan tender project serta agenda pekerjaan dalam usaha anda, menu pembayaran pelanggan, hingga detail laporan keuangan menyempurnakan aplikasi invoice online ini untuk anda gunakan, saat nya menggunakan the next invoice untuk kebutuhan pembukuan perusahaan anda, plus bonus website dengan domain nama perusahaan anda semakin powerfull untuk kebutuhan full online perusahaan dan company profile.spek : domain.my.id + clouds host + the next invoice apps",
        img:
          "https://1.bp.blogspot.com/-4MJ8_pwoPA8/XzpZ_Ew_L8I/AAAAAAAALJM/MzUsIz-HHuU9Q2Y0qftPlcqDpZMrdLG1ACLcBGAsYHQ/s1366/invoice-android-ios-terbaru.jpg",
        price: "Rp.784.600/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/next%20invoice%20online%20generation.pdf",
        url:
          "https://www.youtube.com/playlist?list=PLQDm6k9_HvYOmQuTpsZRU-QtZYYYTBs1L"
      },
      {
        name: "Akuntansi App",
        id: "akuntansi-app",
        description:
          "Sahabat para akuntan dan accounting dalam bekerja, era kebebasan penuh dengan menggunakan apps ini, tidak perlu mengikuti aturan kami karena dalam skema develope nya kami membuat nya lebih mudah dengan kebutuhan anda khusus nya untuk kebiasaan akuntan dalam kebutuhan pencatatan akun yang digunakan untuk transaksi debit kredit, dengan applikasi akuntansi online ini memberikan secara penuh kebebasan untuk anda dalam bekerja dan menyesuaikan dengan kebiasaan anda dalam melakukan pencatatan pembukuan secara cepat. include bonus website informasi untuk usaha anda bisa anda dapatkan dengan harga murah untuk kebutuhan web app apliaksi akuntansi ini, installasi dilakukan secara penuh full web app menjadikan nya lebih mudah dalam kebutuhan untuk akses via berbagai device dalam bekerja via smartphone android iphone laptop pd desktop dan berbagai OS lain nya , semakin mobile untuk kebutuhan pencatatan accounting akuntansi,spek akuntansi app + cloud host + domain.my.id.",
        img:
          "https://1.bp.blogspot.com/-Pd3bEZsY9No/X2Bdo7qBmnI/AAAAAAAALa4/_ZzwbRSdCR8o6CksWta7z9pBuZ9Ds0e_wCLcBGAsYHQ/s2000/aplikasi%2Bakuntansi%2Bonline%2Bmurah.jpg",
        price: "Rp.585.200/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/Akuntansi%20Apps%20Milenial.pdf",
        url:
          "https://mesinkasir.github.io/e-catalog/Akuntansi%20Apps%20Milenial.pdf"
      },
      {
        name: "Invoice of POS",
        id: "ipos",
        description:
          "Kebutuhan untuk kemudahan dalam pembukuan include dengan system yang lengkap maka IPOS invoice of pos apps ini bisa anda gunakan dalam bekerja, mudah digunakan dan support dengan clouds full web app memudahkan dalam akses via berbagai device dalam bekerja via smartphone android iphone hingga pc desktop dan laptop dalam bekerja via apps ini, dengan fitur yang lengkap user account, shop area , produk , stok inventori, melakukan transaksi penjualan dan penerbitan invoice, pembayaran pelanggan , laporan income , dan bonus website include domain anda dalam paket web app ipos semakin powerfull untuk kebutuhan applikasi include website usaha anda,saat nya menggunakan ipos invoice of pos dan rasakan kemudahan setiap pekerjaan , dukungan mobilitas penuh untuk usaha anda.spek domain .my.id + clouds host + invoice of pos apps",
        img:
          "https://1.bp.blogspot.com/-5w9YMRcFOuo/XzpVD7Zf0fI/AAAAAAAALH8/-tApVZF3BKofriWYL9j1sWePsd50B4BYgCLcBGAsYHQ/s400/app%2Binvoice%2Bkasir%2Bonline.png",
        price: "Rp.368.800/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/Invoice%20point%20of%20sale%20app.pdf",
        url:
          "https://www.youtube.com/playlist?list=PLQDm6k9_HvYPbuAl0m6Fn_DUdMe-sr3EM"
      },
      {
        name: "Simple Management",
        id: "simple=management",
        description:
          "Simple management adalah dua aplikasi yang sangat berguna untuk usaha anda , dengan dua aplikasi ini memudahkan masing masing divisi agar fokus bekerja berdasarkan divisi masing masing, pada divisi gudang akan menggunakan aplikasi stok dalam kebutuhan nya, dan memudahkan karyawan untuk akses via smartphone android iphone dalam bekerja untuk mencatat proses in out stok, selanjutnya divisi office dengan pencatatan pembukuan seperti menerbitkan invoice, pembayaran pelanggan dan berbagai kebutuhan lain nya dalam bekerja. semakin mudah dan simple untuk usaha anda dengan web app ini, mudah untuk melakukan transaksi dimana saja dan kapan saja secara real time online, saat nya anda menggunakan applikasi ini untuk solusi terbaik divisi gudang dengan inventori apps dan office dengan invoice apps. spesifikasi : domain .my.id + cloud host + simple management apps",
        img:
          "https://1.bp.blogspot.com/-J7FjVz2M9oo/XzpZ_eKe84I/AAAAAAAALJU/wXxD6tcSFAcfo1PzFntHXiT9vsm9TO8bgCLcBGAsYHQ/s1366/software%2Baplikasi%2Bsystem%2Binvoice%2Bstock%2Binventory2.jpg",
        price: "Rp.784.600/Tahun",
        download:
          "https://mesinkasir.github.io/e-catalog/SIMPLE%20MANAGEMENT%20APP.pdf",
        url:
          "https://www.youtube.com/playlist?list=PLQDm6k9_HvYMVdlLOYbvbgyO6SzA7lwHg"
      }
    ]
  },
  {
    name: "Website App",
    id: "webapp",
    description:
      "Kebutuhan untuk pembuatan website modern dengan technology terbaru maupun kebutuhan simple untuk usaha , company profile, sekolah , restoran toko dan lain nya.",
    resources: [
      {
        name: "Modern Website",
        id: "modern-website",
        description:
          "Gunakan static site generator untuk kebuutuhan website modern dengan mengusung konsep single page app, rasakan technology terbaru ini dengan kecepatan akses pada tiap tiap halaman non loading , menyempurnakan kebutuhan untuk develope modern website dengan technology anyar ini, dan kami memberikan pilihan terbaik untuk dev mulai dari menggunakan angular , gatsby , react hingga riot vue untuk kebutuhan single page app modern situs kamu, saatnya upgrade dan update modern site mu dengan framework ini.",
        img:
          "https://a.fsdn.com/con/app/proj/reactwebsiteapp/screenshots/react%20typescript%20router%20routing%20with%20source%20code%20free%20download%20%282%29.png/max/max/1",
        price: "Rp.1.561.200/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/websiteprice.pdf",
        url: "https://www.youtube.com/watch?v=db3xpo9KrkY"
      },
      {
        name: "Dynamic Website",
        id: "dynamic-website",
        description:
          "Kebutuahan untuk develope website multifungsionaol maka kamu dapat menggunakan dynamic site dalam kebutuhan nya, dengan integrasi database dan dengan menggunakan content management system menyempurnakan dalam kebutuhan develope situs, mulai dari wordpress untuk web admin dan MODX solusi terbaik untuk SEO, hingga grav dan get axcora cms dengan premium template siap untuk digunakan dalam develope modern situs mu.",
        img:
          "https://a.fsdn.com/con/app/proj/companywebsitefreedownload/screenshots/Screenshot_2020-12-08%20Get%20Axcora%20CMS%20-%20Copy%20-%20Copy.jpg/max/max/1",
        price: "Rp.1.561.200/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/websiteprice.pdf",
        url: "https://www.youtube.com/watch?v=0UKnGiCVRiQ"
      },
      {
        name: "Static Website",
        id: "static-website",
        description:
          "Bangun website dengan kebebasan berekspresi dengan menggunakan static site, yap dengan full native html css dan js menjadikan kesempurnaan untuk multi desain dalam kebutuhan pembuatan website , untuk kamu yang menginginkan desain unik dan menarik dan tentunya dengan sentuhan bootstrap menjadi kan kesempurnaan lebih responsive untuk display, atau gunakan jekyll ruby on rails untuk kebutuhan static site modern kamu dan full seo serta kecepatan luar biasa dengan github, dan pilih paket sesuai spesifikasi desain dan halaman dengan kebutuhan kamu, start develope mulai dari 1.5jt an include dengan host dan domain .com",
        img:
          "https://a.fsdn.com/con/app/proj/angularapp/screenshots/Screenshot_2020-09-23%20Angular%20Blog.jpg/max/max/1",
        price: "Rp.1.561.200/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/websiteprice.pdf",
        url: "https://www.youtube.com/watch?v=9hIJzVtdfxo"
      },
      {
        name: "Premium Website",
        id: "premium-website",
        description:
          "Special pembuatan website dengan multiple content management system dan framework dalam develope nya, lebih terarah dan dengan konsep yang tentunya disesuaikan dengan kebutuhan usaha dan bisnis dalam develope nya, dengan menggunakan pembagian area untuk kebutuhan dalam web admin dan halaman halaman yang berfungsi sesuai dengan tugas nya akan menjadikan lebih informatif. seperti halaman info, halaman khusus online shop, halaman khusus untuk blog update dan lain lain lengkap dengan pembagian web admin dalam bertugas, dan tersedia package dengan satu domain plus multiple develope halaman utama menggunakan laravel , vue js dan angular, selanjutnya halaman web admin menggunakan cms semakin elegan untuk kebutuhan situs. dan jika dibutuhkan juga bisa menggunakan dua domain yang terintegrasi menggunakan technology modern seperti react angular untuk halaman dan domain utama yang nantinya akan di integrasikan dengan domain ke dua plus online shop dan aplikasi pembukuan yang lengkap. untuk kebutuhan lengkap dan customise hubungi kami.",
        img:
          "https://a.fsdn.com/con/app/proj/angularshop/screenshots/free%20download%20angular%20online%20shop%20source%20code%20%281%29.jpg/max/max/1",
        price: "Rp.5.652.600/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/websiteprice.pdf",
        url: "https://www.youtube.com/watch?v=-xXcpctuheo"
      },
      {
        name: "The Blogger",
        id: "blogspot-website",
        description:
          "Punya blogspot ?? dan mau ganti atau mau pindah ke cms lain ??? tunggu dulu... blogspot dengan kebebasan dengan hadirnya template nya , memudahkan para developer untuk melakukan perombokan secara detail, dengan sentuhan codding dan kolaborasi dengan berbagai framework , maka blogspot dapat dirubah menjadi lebih profesional baik segi desain dan technology nya, bahkan kita juga bisa menggunakan single page apps, nah disini kita ada layana desain pada halaman utama maupun totoal perubahan mulai dari 651.600 pertahun nya dengan free domain .com dan desain unik menarik pada halaman utama. untuk kebutuhan paket lengkap silahkan chat kami.",
        img:
          "https://a.fsdn.com/con/app/proj/freewebsite/screenshots/freewebsite%20new%281%29.jpg/max/max/1",
        price: "Rp.651.600/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/websiteprice.pdf",
        url: "https://www.youtube.com/watch?v=Vg0Yy0_fFiA"
      },
      {
        name: "Get Axcora CMS",
        id: "axcora-cms",
        description:
          "Get axcora cms adalah solusi pembuatan website murah untuk anda gunakan , selain itu dengan kemudahan dalam digunakan oleh web admin semakin menyempurnakan dalam develope project pembuatan website dengan harga murah, sangat cepat dan sudah didukung dengan SEO title , deskripsi, facebook dan twitter card hingga sitemap.xml yang sudah di generate otomatis menyempurnakan dalam kebutuhan pembuatan website anda. price mulai dari 300ribuan dengan domain my.id hingga 1.561.200/tahun dengan premium tema dan domain .com + aplikasi invoice dan kasir",
        img:
          "https://a.fsdn.com/con/app/proj/getaxcoracms/screenshots/New%20CMS%20modern%20website%20SEO%20%281%29%20-%20Copy.png/max/max/1",
        price: "Rp.368.800/Tahun",
        download: "https://mesinkasir.github.io/e-catalog/getaxcoracms.pdf",
        url: "https://www.youtube.com/watch?v=lxOpSoThms8"
      }
    ]
  },
  {
    name: "Mesin Kasir",
    id: "mesin-kasir",
    description:
      "Mesin kasir terbaru modern all in one touchscreen pos,mesin kasir touchscreen layar sentuh all in one modern dan mesin kasir barcode system.",
    resources: [
      {
        name: "Version 2",
        id: "v2",
        description:
          "All in one touchscreen mesin kasir POS + software kasir lengkap untuk semua usaha  + Printer kasir auto cutter.",
        img:
          "https://1.bp.blogspot.com/-hU1SgbKO0aI/X97OIpUSjRI/AAAAAAAALw0/Kderbf4jXNArVpacJVlbE31tP2HA-82UACLcBGAsYHQ/s300/mesinkasirterbaru%2B%25282%2529.png",
        price: "Rp.10.000.000",
        download:
          "https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf",
        url: "https://www.youtube.com/watch?v=FAhCxCBu8ZE"
      },
      {
        name: "Version 3",
        id: "v3",
        description:
          "All in one touchscreen mesin kasir POS + software kasir lengkap untuk semua usaha + Printer kasir auto cutter + laci kasir besi.",
        img:
          "https://1.bp.blogspot.com/-_BlljbjWIeM/X97OIPh7caI/AAAAAAAALws/I5ch19Eap2g4bIPaAeKo9LZ1qvSxQB5twCLcBGAsYHQ/s300/mesinkasirterbaru%2B%25283%2529.png",
        price: "Rp.11.000.000",
        download:
          "https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf",
        url: "https://www.youtube.com/watch?v=FAhCxCBu8ZE"
      },
      {
        name: "Version 4",
        id: "v4",
        description:
          "All in one touchscreen mesin kasir POS + software kasir lengkap untuk semua usaha  + Printer kasir auto cutter + laci kasir besi + laser barcode manual.",
        img:
          "https://1.bp.blogspot.com/-0NZKcpWm9kw/X97OJNNn9mI/AAAAAAAALw4/RIEiq-dWGy087iH1Oh5z-r4AtuYh7O44QCLcBGAsYHQ/s300/mesinkasirterbaru%2B%25284%2529.png",
        price: "Rp.12.000.000",
        download:
          "https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf",
        url: "https://www.youtube.com/watch?v=FAhCxCBu8ZE"
      },
      {
        name: "Version 5",
        id: "v5",
        description:
          "All in one touchscreen mesin kasir POS + software kasir lengkap untuk semua usaha + Printer kasir auto cutter + laci kasir besi + laser barcode multi auto laser.",
        img:
          "https://1.bp.blogspot.com/-Np6dpwJu-Dk/X97OJyeHGSI/AAAAAAAALw8/6jvCuqi7lHI6kouFUKMq0rQkmy12Pk7tQCLcBGAsYHQ/s300/mesinkasirterbaru%2B%25285%2529.png",
        price: "Rp.14.500.000",
        download:
          "https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf",
        url: "https://www.youtube.com/watch?v=FAhCxCBu8ZE"
      },
      {
        name: "Version 6",
        id: "v6",
        description:
          "All in one touchscreen mesin kasir POS + software kasir lengkap untuk semua usaha + Printer kasir auto cutter + laci kasir besi + laser barcode multi auto laser + mesin barcode.",
        img:
          "https://1.bp.blogspot.com/-MmDK-GujJH0/X97OIYuyqDI/AAAAAAAALww/C6Ha3tgRjOc0soSWxgZabOVo1730uJzvACLcBGAsYHQ/s300/mesinkasirterbaru%2B%25281%2529.png",
        price: "Rp.18.500.000",
        download:
          "https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf",
        url: "https://www.youtube.com/watch?v=FAhCxCBu8ZE"
      }
    ]
  }
];

function Resource({ match }) {
  const product = products
    .find(({ id }) => id === match.params.productId)
    .resources.find(({ id }) => id === match.params.subId);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img
            alt="pintarapp"
            className="img-fluid rounded shadow"
            src={product.img}
          />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <div className="shadow rounded bg-light p-3 p-md-5">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>{product.price}</strong>
            </p>
            <a
              target="_blank"
              className="btn btn-outline-primary"
              href={product.download}
            >
              Download
            </a>{" "}
            <a target="_blank" className="btn btn-primary" href={product.url}>
              Play Demo
            </a>
            <a href="https://wa.me/6285646104747?text=Axcoraapps%20saya%20mau%20informasi%20WebApp%0A">
              <img
                className="img-fluid float-right"
                width="120"
                alt="order mesin kasir"
                src="https://axcoraschool.web.app/assets/img/WA.webp"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Product({ match }) {
  const product = products.find(({ id }) => id === match.params.productId);
  return (
    <div>
      <div
        className="row bg-primary"
        style={{
          opacity: 0.9
        }}
      >
        <div className="text-center col-12 col-md-12 p-3 p-md-5">
          <div
            className="p-3 p-md-5 shadow rounded bg-light"
            uk-scrollspy="cls: uk-animation-slide-top; repeat: true"
          >
            <h2>
              <strong>
                <a href="/">{product.name}</a>
              </strong>
            </h2>
            <p>{product.description}</p>
          </div>
        </div>
        {product.resources.map(sub => (
          <div
            className="p-3"
            key={sub.id}
            uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
          >
            <Link
              className="text-white border p-1 rounded"
              to={`${match.url}/${sub.id}`}
            >
              {sub.name}
            </Link>
          </div>
        ))}

        <Route path={`${match.path}/:subId`} component={Resource} />
      </div>
    </div>
  );
}

function Products({ match }) {
  return (
    <div className="container-fluid text-center">
      <h3>Products</h3>
      <p>Click dan Pilih product layanan kami</p>
      <div
        className="row text-center"
        uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200"
      >
        {products.map(({ name, id }) => (
          <div className="col-4 col-md-2" key={id}>
            <Link
              className="btn btn-primary p-3 border-white rounded"
              to={`${match.url}/${id}`}
            >
              <strong>{name}</strong>
            </Link>
          </div>
        ))}
      </div>
      <hr className="uk-divider-icon" />
      <Route path={`${match.path}/:productId`} component={Product} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="row">
        <div
          className="col-12 col-md-12 p-3 p-md-5"
          uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
          style={{
            opacity: 0.6
          }}
        >
          <div className="shadow rounded p-3 p-md-5 text-center bg-white">
            <h1>
              <strong>
                <a href="/">PINTAR APP</a>
              </strong>
            </h1>
            <h3>Aplikasi Pintar untuk kebutuhan bisnis dan edukasi anda.</h3>
            <p>
              Aplikasi kasir toko shop minimarket, aplikasi restoran cafe rumah
              makan kuliner, aplikasi invoice dan akuntansi, aplikasi sekolah,
              website applikasi , hingga mesin kasir dan web all in one ready.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-1" />
        <div className="col-12 col-md-4 p-3 p-md-5 text-center uk-animation-toggle">
          <img
            className="img-fluid uk-animation-slide-bottom"
            alt="aplikasi toko kasir restoran sekolah dan website mesin kasir online"
            src="https://1.bp.blogspot.com/-8-KwCJ--7hw/X-IOPHALrpI/AAAAAAAAL_4/R0Ha6XZHarojz_Ke5vGST5UCONrvuagLQCLcBGAsYHQ/s504/rvs1.png"
          />
        </div>
        <div className="col-12 col-md-7 p-3 p-md-5 uk-animation-slide-right">
          <div className="p-3 p-md-5">
            <h3>Revolusi Digital.</h3>
            <p>
              Persiapkan diri anda dengan revolusi digital bersama kami untuk
              masa depan terbaik dengan web app, website application yang
              memudahkan dalam berbagai kebutuhan untuk bekerja dengan aplikasi
              dan website all in one lengkap , powerfull dalam kebutuhan online
              anda.
            </p>
            <p>
              Saat nya online kan sekarang bersama kami, dengan{" "}
              <a href="/">
                aplikasi kasir toko, aplikasi restoran,aplikasi invoice
                akuntansi , aplikasi sekolah, hingga mesin kasir online
              </a>{" "}
              dengan web app modern untuk masa depan yang terbaik mendukung
              mobilitas dalam aktivitas.
            </p>
            <p>
              Nikmati kemudahan akses dimana saja dan kapan saja via berbagai
              device android iphone windows dan OS lain nya, tanpa batas secara
              real time online, dunia dalam genggaman anda.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 text-center p-3 uk-animation-toggle">
          <img
            className="img-fluid uk-animation-shake"
            alt="pintar app"
            src="https://1.bp.blogspot.com/-Etha8TohfsA/X-GmzGnl6NI/AAAAAAAAL6A/548yfDEmteE8ZPNqxgbhrbvWe-BCPeYuwCLcBGAsYHQ/s573/pembuatan%2Bwebsite.png"
          />
        </div>
        <div
          className="col-12 col-md-4 p-3 p-md-5"
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 230; repeat: true"
        >
          <Link to="/products/aplikasi-toko">
            <div
              className="shadow rounded bg-primary text-center p-3 p-md-5"
              style={{
                opacity: 0.8
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                className="text-white bi bi-upc-scan"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
              </svg>

              <h3 className="text-white">Toko</h3>
            </div>
          </Link>
        </div>
        <div
          className="col-12 col-md-4 p-3 p-md-5"
          uk-scrollspy="cls: uk-animation-slide-top; delay: 230; repeat: true"
        >
          <Link to="/products/aplikasi-restoran">
            <div
              className="shadow rounded bg-primary text-center p-3 p-md-5"
              style={{
                opacity: 0.8
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                className="bi bi-cart3 text-white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <h3 className="text-white">Resto</h3>
            </div>
          </Link>
        </div>
        <div
          className="col-12 col-md-4 p-3 p-md-5"
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 230; repeat: true"
        >
          <Link to="/products/aplikasi-bisnis">
            <div
              className="shadow rounded bg-primary text-center p-3 p-md-5"
              style={{
                opacity: 0.8
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                className="bi bi-shop text-white"
                viewBox="0 0 16 16"
              >
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
              </svg>

              <h3 className="text-white">Office</h3>
            </div>
          </Link>
        </div>
        <div
          className="col-12 col-md-4 p-3 p-md-5"
          uk-scrollspy="cls: uk-animation-slide-left; delay: 300; repeat: true"
        >
          <Link to="/products/aplikasi-sekolah">
            <div
              className="shadow rounded bg-primary text-center p-3 p-md-5"
              style={{
                opacity: 0.8
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                className="text-white bi bi-trophy"
                viewBox="0 0 16 16"
              >
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg>
              <h3 className="text-white">Sekolah</h3>
            </div>
          </Link>
        </div>
        <div
          className="col-12 col-md-4 p-3 p-md-5"
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; repeat: true"
        >
          <Link to="/products/webapp">
            <div
              className="shadow rounded bg-primary text-center p-3 p-md-5"
              style={{
                opacity: 0.8
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                className="text-white bi bi-github"
                viewBox="0 0 16 16"
              >
                <title>Pembuatan website</title>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <h3 className="text-white">Website</h3>
            </div>
          </Link>
        </div>
        <div
          className="col-12 col-md-4 p-3 p-md-5"
          uk-scrollspy="cls: uk-animation-slide-right; delay: 300; repeat: true"
        >
          <Link to="/products/aplikasi-mesinkasir">
            <div
              className="shadow rounded bg-primary text-center p-3 p-md-5"
              style={{
                opacity: 0.8
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                className="text-white bi bi-tv"
                viewBox="0 0 16 16"
              >
                <title>mesin kasir</title>
                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
              </svg>
              <h3 className="text-white">Mesin Kasir</h3>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-5  uk-animation-toggle">
          <img
            className="img-fluid uk-animation-scale-up"
            alt="pintar app"
            src="https://1.bp.blogspot.com/-FLNRHBN0reA/X-GsZoiN6oI/AAAAAAAAL7E/8Ca23a2NG5A4Tc9MIvJYvKOw14bbgBM6gCLcBGAsYHQ/s626/ctav.png"
          />
        </div>
        <div className="col-12 col-md-8 p-3 p-md-5">
          <div className="p-3 p-md-5">
            <h3>Clouds Web App</h3>
            <p>
              Pastikan anda menggunakan technology clouds kami, dengan web app
              rasakan kebebasan dalam beraktivitas , tidak ada batasan user
              login dalam beroperasional, dan tidak ada biaya tambahan pada
              <a href="/">
                aplikasi kasir toko restoran dan office bisnis akuntansi invoice
              </a>
              app anda.
            </p>
            <p>
              Special untuk edukasi khusus nya sekolah dengan e-learn online
              lengkap murah siap untuk digunakan dalam menunjang proses belajar
              mengajar serta mencatat pembukuan sekolah dengan ERP school kami.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 text-center p-3 uk-animation-toggle">
          <img
            className="img-fluid uk-animation-scale-down"
            alt="pintar app"
            src="https://1.bp.blogspot.com/-ZgThCBBOIXk/X-GyC1_93iI/AAAAAAAAL-g/KklJKtvnXhECd6PZg9vKQeHAyW0uyvowgCPcBGAYYCw/s741/aplikasisekolaherpaxcoraschool.png"
          />
          <div className="p-3 p-md-5">
            <p>
              Mulai revolusi digital mu sekarang dan pilih layanan sesuai dengan
              kebutuhan mu disini
            </p>
            <Link
              className="btn btn-primary rounded-pill uk-animation-toggle uk-animation-shake"
              to="/products"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav shadow p-1 justify-content-center">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>{" "}
            <Link className="nav-link" to="/about">
              Contact
            </Link>
          </nav>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
