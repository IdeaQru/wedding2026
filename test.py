import os
import shutil

source_folder = "prewed"
target_folder = "public"

PHOTO_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

os.makedirs(target_folder, exist_ok=True)

photo_files = []
for file in os.listdir(source_folder):
    _, ext = os.path.splitext(file)
    if ext.lower() in PHOTO_EXTENSIONS:
        photo_files.append(os.path.join(source_folder, file))

photo_files.sort()

if not photo_files:
    print("Tidak ada file foto ditemukan di folder prewed.")
else:
    print(f"Ditemukan {len(photo_files)} file foto")
    print("-" * 50)

    for index, src_path in enumerate(photo_files, start=1):
        new_filename = f"{index}.jpg"
        dst_path = os.path.join(target_folder, new_filename)

        shutil.copy2(src_path, dst_path)
        print(f"[{index:>3}] {os.path.basename(src_path):20s} -> {new_filename}")  # <- diganti

    print("-" * 50)
    print(f"Selesai! {len(photo_files)} file berhasil disalin ke '{target_folder}'")  # <- hapus emoji
