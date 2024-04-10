import argparse
from PIL import Image

def create_slices(image_path, output_folder, group_name, slice_width, slice_height, num_slices):
    original_image = Image.open(image_path)

    original_width, original_height = original_image.size

    num_slices_horizontal = original_width // slice_width

    num_slices_vertical = original_height // slice_height

    total_slices = num_slices_horizontal * num_slices_vertical
    if total_slices < num_slices:
        raise ValueError("Not enough slices can be created from the original image.")

    slice_count = 0
    for y in range(num_slices_vertical):
        for x in range(num_slices_horizontal):
            start_x = x * slice_width
            start_y = y * slice_height

            slice_image = original_image.crop((start_x, start_y, start_x + slice_width, start_y + slice_height))

            slice_name = f"{output_folder}/{group_name}_{slice_count+1}.png"

            slice_image.save(slice_name)

            print(f"Slice {slice_name} saved successfully.")

            slice_count += 1

            if slice_count >= num_slices:
                return

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="Create slices from an image.")
    parser.add_argument("image", help="Path to the original image file")
    parser.add_argument("output_folder", help="Destination folder to save the slices")
    parser.add_argument("group_name", help="A name for the group to save the slices")
    args = parser.parse_args()

    slice_width = 88
    slice_height = 124

    num_slices = 15

    create_slices(args.image, args.output_folder, args.group_name, slice_width, slice_height, num_slices)
