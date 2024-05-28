<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookCategory;
class BookCategoryController extends Controller
{
    public function allCategory()
    {
        return response()->json(BookCategory::all(), 200);
    }

    public function showACategory($id)
    {
        $book = BookCategory::find($id);
        if (!$book) {
            return response()->json(['error' => 'Category not found'], 404);
        }
        return response()->json($book, 200);
    }

    public function createCategory(Request $request)
    {
        $book = BookCategory::create($request->all());
        return response()->json($book, 201);
    }

    public function updateCategory(Request $request, $id)
    {
        $book = BookCategory::find($id);
        if (!$book) {
            return response()->json(['error' => 'Category not found'], 404);
        }
        $book->update($request->all());
        return response()->json(['message' => 'Category updated successfully'], 200);
    }

    public function deleteCategory($id)
    {
        $book = BookCategory::find($id);
        if (!$book) {
            return response()->json(['error' => 'Category not found'], 404);
        }
        $book->delete();
        return response()->json(['message' => 'Category deleted successfully'], 200);
    }

    public function archiveCategory($id)
    {
        $category = BookCategory::find($id);
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }
        $category->is_archived = 1;
        $category->save();
        return response()->json(['message' => 'Category archived successfully'], 200);
    }

    public function unarchiveCategory($id)
    {
        $category = BookCategory::find($id);
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }
        $category->is_archived = 0;
        $category->save();
        return response()->json(['message' => 'Category unarchived successfully'], 200);
    }
}
