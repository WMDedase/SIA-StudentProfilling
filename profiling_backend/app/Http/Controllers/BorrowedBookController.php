<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BorrowedBook;
use App\Models\Book;

class BorrowedBookController extends Controller
{
    public function allBorrows()
    {
        return response()->json(BorrowedBook::all(), 200);
    }

    public function showNewestStatusId()
    {
        $newestId = BorrowedBook::orderBy('borrow_id', 'desc')->limit(1)->value('borrow_id');
        return response()->json(['borrow_id' => $newestId], 200);
    }

    public function createBorrowStatus(Request $request)
    {
        $bookId = $request->input('book_id');
        $book = Book::find($bookId);
        if (!$book) {
            return response()->json(['error' => 'Book not found'], 404);
        }
        if ($book->book_qty <= 0) {
            return response()->json(['error' => 'Book is out of stock'], 400);
        }
        if ($book->is_archived) {
            return response()->json(['error' => 'Book is archived and cannot be borrowed'], 400);
        }
        $book->book_qty--;
        $book->save();
        $borrowStatus = BorrowedBook::create($request->all());
        return response()->json($borrowStatus, 201);
    }

    public function getAllBorrowByStudent($id)
    {
        $borrowStatuses = BorrowedBook::where('student_id', $id)->get();
        return response()->json($borrowStatuses, 200);
    }

    public function getAllBorrowByBorrow($id)
    {
        $borrowStatus = BorrowedBook::find($id);
        if (!$borrowStatus) {
            return response()->json(['error' => 'Borrowed book not found'], 404);
        }
        return response()->json($borrowStatus, 200);
    }

    public function getAllBorrow()
    {
        return response()->json(BorrowedBook::all(), 200);
    }

    public function updateBorrowStatus($id)
    {
        $borrowStatus = BorrowedBook::find($id);
        if (!$borrowStatus) {
            return response()->json(['error' => 'Borrowed book not found'], 404);
        }
        $borrowStatus->update(['borrow_status' => 2]);
        $book = $borrowStatus->book;
        $book->increment('book_qty');
        return response()->json(['message' => 'Borrow status updated successfully'], 200);
    } //return with damage wag kaalimutan

    public function damagedBorrowStatus($id)
    {
        $borrowStatus = BorrowedBook::find($id);
        if (!$borrowStatus) {
            return response()->json(['error' => 'Borrowed book not found'], 404);
        }
        $borrowStatus->update(['borrow_status' => 3]);
        $book = $borrowStatus->book;
        $book->increment('book_qty');
        return response()->json(['message' => 'Borrow status updated successfully'], 200);
    }

    public function cancelBorrowStatus($id)
    {
        $borrowStatus = BorrowedBook::find($id);
        if (!$borrowStatus) {
            return response()->json(['error' => 'Borrowed book not found'], 404);
        }
        $borrowStatus->update(['borrow_status' => 0]);
        return response()->json(['message' => 'Borrow status canceled successfully'], 200);
    }
}

