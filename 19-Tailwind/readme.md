# Tailwind CSS Notes

## 1. Color
**Syntax:** `property-color-intensity`

- **Intensity Range:** 50 to 950 (e.g., `bg-red-500`, `text-blue-600`)
- **Common Colors:** red, green, orange, sky, blue, etc.
- **Special Cases:** `white` and `black` do not have intensity values.

## 2. Border
**Syntax:** `border-[side]-[width] border-[color]-[intensity]`

- `border`: Adds a default border of 1px.
- `border-2`: Sets border width to 2px.
- `border-[color]-[intensity]`: Changes the border color.

### Specific Sides
| Class | Description |
| :--- | :--- |
| `border-t` | Top border |
| `border-r` | Right border |
| `border-b` | Bottom border |
| `border-l` | Left border |

*Example:* `border-t-2` adds a 2px border to the top.

## 3. Spacing (Margin & Padding)
**Unit Scale:** `1` unit = `0.25rem` = `4px`
*(e.g., `4` = `1rem` = `16px`)*

### Margin (`m`)
| Class | Description |
| :--- | :--- |
| `m-1` | Margin of 4px on all sides |
| `mx-1` | Horizontal margin (left & right) |
| `my-1` | Vertical margin (top & bottom) |
| `mt` / `mb` | Margin Top / Bottom |
| `ml` / `mr` | Margin Left / Right |

### Padding (`p`)
| Class | Description |
| :--- | :--- |
| `p-1` | Padding of 4px on all sides |
| `px-1` | Horizontal padding (left & right) |
| `py-1` | Vertical padding (top & bottom) |
| `pt` / `pb` | Padding Top / Bottom |
| `pl` / `pr` | Padding Left / Right |

## 4. Typography (Font Size)

| Class | Font Size (rem) | Font Size (px) |
| :--- | :--- | :--- |
| `text-xs` | 0.75rem | 12px |
| `text-sm` | 0.875rem | 14px |
| `text-base` | 1rem | 16px (default) |
| `text-lg` | 1.125rem | 18px |
| `text-xl` | 1.25rem | 20px |
| `text-2xl` | 1.5rem | 24px |
| `text-3xl` | 1.875rem | 30px |
| `text-4xl` | 2.25rem | 36px |
| `text-5xl` | 3rem | 48px |

## 5. Layout & UI Utilities

### Border Radius
**Prefix:** `rounded`
**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full` (circle)

### Example Usage
```jsx
<img className="w-full h-48 object-cover rounded-xl" />
```
- `w-full`: Width 100%
- `h-48`: Height fixed (48 * 4px = 192px)
- `object-cover`: Image resizing behavior (like CSS `object-fit: cover`)
- `rounded-xl`: Extra large rounded corners


### <span style="color: orange"> Advantages</span>

- small css file because one class is used all over the project 
- easy to use
- fast development
- batter for production

### <span style="color: orange"> Disadvantages</span> 
- code reading is difficult because of too many classes in one line