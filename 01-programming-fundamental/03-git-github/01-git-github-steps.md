# Git, GiutHub Steps

## Memeriksa Setup Git

1. 'git -v': Memeriksa versi git yang terpasang
2. 'git config --list': Memeriksa pengaturan git
3. 'git config --global user.name AndhikaArif'
4. 'git config --global user.email andika97arif@gmail.com'

## Membuat Git Repository (Folder)

1. 'git init' : Mengubah folder biasa menjadi Git repository

## Menambahkan File ke dalam repository Local

1. 'git status' : Cek status repository
2. 'git add' : Untuk menambah file yg mau di commit
3. 'git commit -m "[PESAN COMMIT]"' : Untuk upload file yg sudah di 'add' tadi & tambah komen untuk memberitahu rekan lainnya apa yang kamu ubah
4. 'git log' : Untuk memeriksa perubahan apa saja yang kamu lakukan yang sudah kamu commit

## Memasukkan Git Repository Local k Git Repository Remote (GitHub)

1. Buat folder/repository Github terlebih dahulu
2. 'git remote add origin [URL]'
3. 'git branch -M main'
4. 'git push -u origin main'

## Menambahkan File ke dalam repository Local & Remote

1. 'git add.'
2. 'git commit -m "[PESAN COMMIT]"
3. 'git push'